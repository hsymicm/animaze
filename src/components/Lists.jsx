import '@/assets/styles/Lists.css'

export default function Lists({options, onOptionChange}) {
    return (
        <>
        <h4 className='title'>Lists</h4>
        <ul className='list'>
            {options.map((option, key) => (
                <li 
                key={key} 
                className={option.isSelected ? 'active' : ''} 
                onClick={() => onOptionChange(key)}>
                    {option.option}
                </li>
            ))}
        </ul>
        </>
    )
}