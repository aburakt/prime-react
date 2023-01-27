import { Menubar } from 'primereact/menubar';
import { InputSwitch } from 'primereact/inputswitch'
import { useLightMode } from 'color-scheme-hook'
import "../App.css"

export default function Header() {

    // Theme Switch
    const [isLightMode, toggleColorScheme] = useLightMode();
    const source = isLightMode
        ? "/themes/lara-light-blue/theme.css"
        : "/themes/lara-dark-blue/theme.css";
    const Style = <link rel='stylesheet' href={source} />;
    const Darkmode = () => {
        return (
            <div className='flex flex-row align-items-center gap-2'>
                <i className='pi pi-moon'></i>
                <InputSwitch checked={isLightMode} onChange={toggleColorScheme} />
                <i className='pi pi-sun'></i>
            </div>
        )
    }
    // Menubar Properties 
    const item = [{ label: 'Appname' }];
    const start = <img alt='logo' src='../../public/vite.svg' height='60px' className='mr-3' />
    const end = <Darkmode />

    return (
        <>
            {Style}

            <Menubar
                model={item}
                start={start}
                end={end}
                className="w-full -font-bold text-4xl" />
        </>
    )
}