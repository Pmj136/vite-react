import React from 'react'
import { Card, Chip, Link, Stack } from '@mui/material'
import { IArticle } from '@/types/article'
import Image from '@/components/Image/Image'
import { Link as RouterLink } from 'react-router-dom'
import {
    FavoriteBorder,
    VisibilityOutlined,
    ModeCommentOutlined,
} from '@mui/icons-material'
import classes from './article.module.scss'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime' // import plugin
import 'dayjs/locale/zh-cn' // import locale
dayjs.extend(relativeTime)
dayjs.locale('zh-cn')

interface IProps {
    data: IArticle
}

function Article(props: IProps) {
    const handleClick = (e: any) => {
        e.stopPropagation()
    }
    return (
        <Card
            elevation={0}
            square
            className={classes.article}
            onClick={handleClick}
        >
            <div className={classes['article-left']}>
                <Stack
                    className={classes['top-list']}
                    direction="row"
                    divider={<span className={classes.driver}>•</span>}
                    spacing={1}
                >
                    <Link
                        className={classes['top-list-item']}
                        component={RouterLink}
                        underline="hover"
                        target="_blank"
                        to={'/user/' + props.data.author.id + '/dynamic'}
                    >
                        {props.data.author.nick}
                    </Link>
                    {/*<Typography*/}
                    {/*    component="span"*/}
                    {/*    variant="gray">*/}
                    {/*    {dayjs(props.data.createTime).fromNow()}*/}
                    {/*</Typography>*/}
                    {/*<Typography*/}
                    {/*    component="span"*/}
                    {/*    variant="gray">*/}
                    {/*    {props.data.tagName}*/}
                    {/*</Typography>*/}
                    {/*<Typography*/}
                    {/*    component="span"*/}
                    {/*    variant="body2">{props.data.tagName}*/}
                    {/*</Typography>*/}
                    <span className={classes['top-list-item']}>
                        {dayjs(props.data.createTime).fromNow()}
                    </span>
                    <span className={classes['top-list-item']}>
                        {props.data.tagName}
                    </span>
                </Stack>
                <Link
                    className={classes.title}
                    component={RouterLink}
                    color="inherit"
                    underline="hover"
                    to={'/post'}
                >
                    {props.data.title}
                </Link>
                {/*<Typography component="span" variant="text">{props.data.briefContent}</Typography>*/}
                <p className={classes['brief-content']}>
                    {props.data.briefContent}
                </p>
                <Stack direction="row" spacing={2}>
                    <Chip
                        size="small"
                        icon={<VisibilityOutlined style={{ fontSize: 20 }} />}
                        label={props.data.browseCount}
                    />
                    <Chip
                        size="small"
                        icon={<FavoriteBorder style={{ fontSize: 20 }} />}
                        label={props.data.likeCount}
                    />
                    <Chip
                        size="small"
                        icon={<ModeCommentOutlined style={{ fontSize: 18 }} />}
                        label={props.data.commentCount}
                    />
                    <Chip size="small" label="更多" />
                </Stack>
            </div>
            {props.data.cover !== '' && (
                <Image size={110} src={props.data.cover} fit="cover" />
            )}
        </Card>
    )
}

export default Article
