import {Menubar} from 'primereact/menubar'

export default function Header() {
    const item = [{label:'Appname'}];
    const start = <img alt='logo' src='../../public/vite.svg' height='40px' className='mr-3'/>
    const end = <p>Darkmode</p>

    return (
        <Menubar model={item} start={start} end={end} className="flex flex-wrap align-items-center justify-content-center"/>
    )
}