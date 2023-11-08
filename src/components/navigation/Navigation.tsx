import { Menu, Burger } from '@mantine/core'
import { paths } from '../../utilities/constants'

const Navigation = (): JSX.Element => {
    return (
        <Menu>
            <Menu.Target>
                <Burger></Burger>
            </Menu.Target>
            <Menu.Dropdown>
                {paths.map((path)=>{
                    return (
                        <Menu.Item leftSection={<path.icon />}>{path.label}</Menu.Item>
                    )
                })}
            </Menu.Dropdown>
        </Menu>
    )
}

export default Navigation