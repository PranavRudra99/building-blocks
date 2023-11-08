import { Menu, Burger } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { paths } from '../../utilities/constants'
import { useNavigate } from 'react-router'
import { useContext } from 'react'
import { GlobalContext } from '../../contexts/GlobalContext'

const Navigation = (): JSX.Element => {
    const [opened, { toggle }] = useDisclosure()
    const navigate = useNavigate()
    const { setSelectedPage } = useContext(GlobalContext)
    const handleClick = (url: string) => {
        toggle();
        setSelectedPage(paths.findIndex((path) => {
            return path.endpoint === url
        }))
        navigate(url)
    }

    return (
        <Menu>
            <Menu.Target>
                <Burger opened={opened} onClick={toggle}></Burger>
            </Menu.Target>
            <Menu.Dropdown>
                {paths.map((path) => {
                    return (
                        <Menu.Item key={path.label} leftSection={<path.icon />} onClick={() => { handleClick(path.endpoint) }}>{path.label}</Menu.Item>
                    )
                })}
            </Menu.Dropdown>
        </Menu>
    )
}

export default Navigation