import '@/assets/styles/Lists.css'

export default function Lists({options, onOptionChange}) {
    return (
        <>
        <h4 className='title'>Lists</h4>
        <ul className='list'>
            {Object.keys(options).map((option, key) => (
                <li 
                key={key} 
                className={options[option].isSelected ? 'active' : ''} 
                onClick={() => onOptionChange(option)}>
                    {options[option].option}
                </li>
            ))}
        </ul>
        </>
    )
}