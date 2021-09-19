import React from 'react'
import { Card, List, ListItem, ListItemIcon, Typography } from '@mui/material'
import { DownhillSkiing, Favorite, Visibility } from '@mui/icons-material'
import AnimationNumber from '@/components/AnimationNumber'

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
                            <AnimationNumber toNumber={data?.likeCount} />
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
                            <AnimationNumber toNumber={data?.browseCount} />
                        </Typography>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <DownhillSkiing />
                        </ListItemIcon>
                        <Typography variant="body2" style={{ marginRight: 10 }}>
                            威望值
                        </Typography>
                        <Typography variant="body1" color="secondary">
                            <AnimationNumber toNumber={data?.integral} />
                        </Typography>
                    </ListItem>
                </List>
            </Card>
        </section>
    )
}

export default Merit
