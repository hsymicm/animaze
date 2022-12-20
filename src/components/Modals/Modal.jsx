import '@/assets/styles/Modal.css'
import Backdrop from '@/components/Modals/Backdrop'
import XMark from '@/assets/svgs/xmark-solid.svg'
import ComboBox from '@/components/ComboBox'
import Button from '@/components/Button'
import Incremental from '@/components/Incremental'

const status = ['Watching', 'Completed', 'Planning']

export default function Modal({ handleClose, text }) {
    const banner = 'https://s4.anilist.co/file/anilistcdn/media/anime/banner/106479-G1rExJ4m8Be3.jpg'
    const cover = 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx106479-JmPk1F5ubMtm.png'
    const headerBg = 'linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3))'
    return (
        <Backdrop onClick={handleClose}>
            <div
                onClick={(e) => e.stopPropagation()}
                className="modal-box text-white"
            >
                <div 
                    style={{
                        background : `${headerBg},url(${banner})`,
                        backgroundSize : 'cover',
                        backgroundPosition : 'center',
                    }} 
                    className="modal-header modal-padding"
                >
                    <div className='modal-title'>
                        <img className='cover' src={cover}/>
                        <div className='title'>
                            BOFURI: I Don't Want to Get Hurt, so I'll Max Out My Defense.
                        </div>
                    </div>
                    <img onClick={handleClose} src={XMark} width='18px'/>
                </div>
                <div
                    className='modal-padding modal-content'
                >
                    <div className='modal-row'>
                        <div className='modal-item'>
                            <h4>Status</h4>
                            <ComboBox width='200px' filter='Status' options={status} />
                        </div>
                        <div className='modal-item'>
                            <h4>Score</h4>
                            <Incremental width='auto' increase={5} limit={100}/>
                        </div>
                        <div className='modal-item' >
                            <h4>Episode</h4>
                            <Incremental width='auto' increase={1} limit={12}/>
                        </div>
                    </div>
                    <div className="modal-item">
                    <h4>Notes</h4>
                    <textarea className='text-area'/>
                    </div>
                    <div className='modal-btn'>
                        <Button width='120px' className='btn btn-secondary' label='Cancel'/>
                        <Button width='120px' className='btn btn-primary' label='Save'/>
                    </div>
                </div>
            </div>
        </Backdrop>
    )
}