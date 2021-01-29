import styles from './index.module.css'
import { useState, useRef } from 'react'
import dynamic from 'next/dynamic';

const JoditEditor = dynamic(() => import('jodit-react'), { ssr: false, loading: 'Loading' })

const Admin = () => {
    const editor = useRef(null)
    const config = {
        "uploader": {
            "insertImageAsBase64URI": true
        },
        "defaultMode": "1",
        "showCharsCounter": false,
        "showWordsCounter": false,
        "showXPathInStatusbar": false,
        "toolbarSticky": false,
        toolbar: true,
        readonly: false // all options from https://xdsoft.net/jodit/doc/
    }

    const [value, setValue] = useState('')
    return (
        <div className={styles.admin}>
            <div className={styles.admin_container}>
                <div className={styles.video_input}>
                    <span className={styles.video_icon}></span>
                </div>

                <JoditEditor
                    t
                    ref={editor}
                    value={value || ''}
                    config={config}
                    tabIndex={1} // tabIndex of textarea
                    onBlur={newContent => setValue(value)} // preferred to use only this option to update the content for performance reasons
                    onChange={newContent => { }}
                />

            </div>
        </div>
    )
}

export default Admin;