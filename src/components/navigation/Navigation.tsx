import { Menu, Burger } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { paths } from '../../utilities/constants'
import { useNavigate } from 'react-router'

const Navigation = (): JSX.Element => {
    const [opened, { toggle }] = useDisclosure()
    const navigate = useNavigate()
    return (
        <Menu>
            <Menu.Target>
                <Burger opened={opened} onClick={toggle}></Burger>
            </Menu.Target>
            <Menu.Dropdown>
                {paths.map((path)=>{
                    return (
                        <Menu.Item leftSection={<path.icon />} onClick={()=>{toggle(); navigate(path.path)}}>{path.label}</Menu.Item>
                    )
                })}
            </Menu.Dropdown>
        </Menu>
    )
}

export default Navigation