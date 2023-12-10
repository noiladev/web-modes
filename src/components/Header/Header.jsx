import './Header.css'

function Header({data}) {
    console.log();
    return (
        <div className={data % 2 == 0? 'light' : 'night'}>
            <h1>{data % 2 == 0? 'light mode' : 'dark mode'}</h1>
            <h1>{data}  </h1>
        </div>
    )
}

export default Header