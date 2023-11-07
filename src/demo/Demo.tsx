import { useState } from 'react';
import { Button } from '@mantine/core'
const Demo = (): JSX.Element => {
    const [buttonKey, setButtonKey] = useState(0)
    const buttonContet = ['Test', 'Working!', 'Reset']
    return (
        <div className='full-height center'>
            <div>
                <Button onClick={() => { setButtonKey(buttonKey >= buttonContet.length - 1 ? 0 : buttonKey + 1) }}>{buttonContet[buttonKey]}</Button>
            </div>
        </div>
    )
}

export default Demo