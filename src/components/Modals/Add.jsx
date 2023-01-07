// IMPORT ASSETS
import '@/assets/styles/Add.css'
import '@/assets/styles/Style.css'
import '@/assets/styles/Modal.css'
import XMark from '@/assets/svgs/xmark-solid.svg'

// IMPORT COMPONENTS
import ComboBox from '@/components/ComboBox'
import Button from '@/components/Button'
import Incremental from '@/components/Incremental'
import TextArea from '@/components/TextArea'

// IMPORT MODULE
import { truncate } from '@/modules/STRING'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getColor } from '@/modules/HEX_CONVERT'
import { addWatchlist, delWatchlist, updateWatchlist } from '@/modules/SHOWS'

const STATUS_OPTIONS = ['Watching', 'Completed', 'Planning']
const gradient = 'linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3))'

export default function Add({ handleClose, data, index, status, isUpdate }) {
    const navigate = useNavigate()

    const [Status, setStatus] = useState(status ? status : null)
    const [detail, setDetail] = useState(isUpdate ? data : {
        ...data,
        progress : null,
        score : null,
        notes : '',
    })

    const handleSave = (details, Status=null) => {
        if(!Status) return
        addWatchlist(details, Status)
        handleClose()
        navigate("/watchlist")
    }

    const handleDelete = (index, status) => {
        if(!index) return
        delWatchlist(index, status)
        handleClose()
    }

    const handleUpdate = (index, status, updatedStatus, show) => {
        if(!index) return
        updateWatchlist(index, status, updatedStatus, show)
        handleClose()
    }

    return (
        <div
            onClick={(e) => e.stopPropagation()}
            className="modal-box text-white"
        >
            <div 
                style={{
                    background : `${gradient},url(${data?.banner})`,
                    backgroundSize : 'cover',
                    backgroundPosition : 'center',
                }} 
                className="modal-header modal-padding"
            >
                <div className='modal-title'>
                    <img
                        style={{boxShadow : `0 4px 10px ${getColor(data.cover.color, 0.2)}`}}
                        className='cover' 
                        src={data?.cover?.url}
                    />
                    <div className='title'>
                        {truncate(data.title.english ? data.title.english : data.title.romaji, 100)}
                    </div>
                </div>
                <img style={{cursor: 'pointer'}}onClick={handleClose} src={XMark} width='18px'/>
            </div>
            <div
                className='modal-padding modal-content'
            >
                <div className='modal-row'>
                    <div className='modal-item'>
                        <h4>Status</h4>
                        <ComboBox
                            getSelected={(val) => setStatus(val)}
                            width='224px' 
                            filter='Status' 
                            options={STATUS_OPTIONS}
                            defaultVal={status}
                        />
                    </div>
                    <div className='modal-item'>
                        <h4>Score</h4>
                        <Incremental
                            getValue={(val) => {
                                setDetail({...detail, 'score' : val})
                            }}
                            width='auto' 
                            increase={5} 
                            limit={100}
                            defaultVal={data?.score}
                        />
                    </div>
                    <div className='modal-item' >
                        <h4>Episode</h4>
                        <Incremental
                            getValue={(val) => {
                                setDetail({...detail, 'progress' : val})
                            }} 
                            width='auto' 
                            increase={1} 
                            limit={data.episodes ? data.episodes : 0}
                            defaultVal={data?.progress}
                        />
                    </div>
                </div>
                <div className="modal-item">
                <TextArea
                    label="Notes"
                    getText={(val) => setDetail({...detail, 'notes' : val})}
                    defaultVal={data?.notes}
                />
                </div>
                <div style={{justifyContent : isUpdate ? 'space-between' : 'end'}} className='modal-btn'>
                    {isUpdate &&
                    <Button 
                        onClick={() => handleDelete(index, status)}
                        width='120px'
                        className='btn btn-secondary'
                        label='Delete'
                    />}
                    <div className='right-btn'>
                        <Button
                            onClick={handleClose}
                            width='120px'
                            className='btn btn-secondary' 
                            label='Cancel'
                        />
                        <Button 
                            onClick={() => {
                                isUpdate ? handleUpdate(index, status, Status, detail) : handleSave(detail, Status)
                            }}
                            width='120px'
                            className='btn btn-primary'
                            label='Save'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}