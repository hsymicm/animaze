import "@/assets/styles/Incremental.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretUp, faCaretDown } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"

export default function Incremental({
  width,
  limit,
  increase,
  getValue,
  defaultVal,
}) {
  const [value, setValue] = useState(defaultVal ? defaultVal : 0)
  const handleValueChange = (num, limit = 0, button = true) => {
    if (!num) num = 0
    if (!button) {
      num = /^\d+$/.test(num) ? Number(num) : value
    } else {
      num = value - (((value % num) + num) % num) + num
    }
    if (num > limit) setValue(limit)
    else if (num < 0) setValue(0)
    else setValue(num)
  }

  useEffect(() => {
    getValue(value ? value : null)
  }, [value])

  return (
    <div style={{ width: width }} className="incremental-box">
      <input
        value={value}
        onChange={(e) => handleValueChange(e.target.value, limit, false)}
        type="text"
        className="input-box"
      />
      <div className="control">
        <FontAwesomeIcon
          className="control-icon"
          onClick={() => handleValueChange(increase, limit)}
          icon={faCaretUp}
          size="xs"
        />
        <FontAwesomeIcon
          className="control-icon"
          onClick={() => handleValueChange(-increase, limit)}
          icon={faCaretDown}
          size="xs"
        />
      </div>
    </div>
  )
}
