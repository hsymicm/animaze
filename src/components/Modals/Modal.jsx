import "@/assets/styles/Modal.css"
import Backdrop from "@/components/Modals/Backdrop"
import Add from "@/components/Modals/Add"
import Browse from "@/components/Modals/Browse"
import { useState } from "react"
import { AnimatePresence } from "framer-motion"

export default function Modal({ handleClose, scrollPos, id, objUpdate }) {
  const [data, setData] = useState(objUpdate ? objUpdate.obj : [])
  const [isAdd, setIsAdd] = useState(objUpdate ? true : false)
  const handleData = (result) => {
    setData(result)
    setIsAdd(true)
  }
  return (
    <Backdrop scrollPos={scrollPos} onClick={handleClose}>
      <AnimatePresence>
        {!isAdd && <Browse getData={handleData} handleClose={handleClose} />}
        {isAdd && (
          <Add
            handleClose={handleClose}
            data={data}
            id={id}
            status={objUpdate?.status}
            isUpdate={objUpdate ? true : false}
          />
        )}
      </AnimatePresence>
    </Backdrop>
  )
}
