import React from 'react'
import {
    Card,
    List,
    ListItem,
    ListItemIcon,
    Typography,
} from '@material-ui/core'
import { Eco, Favorite, Visibility } from '@material-ui/icons'

interface IProps {
    data: {
        likeCount: number
        browseCount: number
        integral: number
    }
}

function Merit({ data }: IProps) {
    return (
        <section style={{ marginBottom: 16 }}>
            <Typography style={{ marginBottom: 10 }}>个人成就</Typography>
            <Card elevation={0} square>
                <List>
                    <ListItem>
                        <ListItemIcon>
                            <Favorite />
                        </ListItemIcon>
                        <Typography variant="body2" style={{ marginRight: 10 }}>
                            获得点赞
                        </Typography>
                        <Typography variant="body1" color="secondary">
                            {data?.likeCount || 0}
                        </Typography>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <Visibility />
                        </ListItemIcon>
                        <Typography variant="body2" style={{ marginRight: 10 }}>
                            文章被阅读
                        </Typography>
                        <Typography variant="body1" color="secondary">
                            {data?.browseCount || 0}
                        </Typography>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <Eco />
                        </ListItemIcon>
                        <Typography variant="body2" style={{ marginRight: 10 }}>
                            威望值
                        </Typography>
                        <Typography variant="body1" color="secondary">
                            {data?.integral || 0}
                        </Typography>
                    </ListItem>
                </List>
            </Card>
        </section>
    )
}

export default Merit
