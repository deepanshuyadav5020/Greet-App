export const Input = ({placeholder,val,fn}) => {
    return <input value= {val} onChange={fn} type="text" placeholder={placeholder}></input>
}