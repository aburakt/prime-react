import { TabView, TabPanel } from 'primereact/tabview';
import UploadTab from './FileUpload'
import Cards from '../pages/DownloadPage'

export default function MainTab() {

    return (
        <>
            <div className='flex justify-content-center surface-0 p-5'>
                <TabView className='container sahdow-5 border-round-xl'>
                    <TabPanel header="Hoşgeldiniz" leftIcon='pi pi-fw pi-home' >
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </TabPanel>
                    <TabPanel header="Documentation" leftIcon='pi pi-fw pi-file' >
                        <Cards />
                    </TabPanel>
                    <TabPanel header="Settings" leftIcon='pi pi-fw pi-cog' >
                        <UploadTab />
                    </TabPanel>
                </TabView>
            </div>
        </>
    )
}