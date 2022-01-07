// the structure of location is wrong
// the correct structure should each string has its own locale and provide a fallback locale instead has each locale has different strings

import moment from "moment"
import { title } from "process"

type Event = {
    title: string,
    description: string,
    date: string,
}

type Memory = {
    title?: string,
    description?: string,
}

export type Data = {
    layout: {
        home: string,
        information: string,
        events: string,
        story: string,
        gallery: string,
    },
    home: {
        wedding_day: string,
        story: string,
        info: string,
        about_us: string,
        des1: string,
        des2: string,
        day_until: string,
        days: string,
        hours: string,
        minutes: string,
        seconds: string,
    },
    info: {
        location: string,
        details: string,
        gallery: string,
        title: string,
        // details 
        date_time: string,
        date_time_data: string,
        location_data: string,
        dress_code: string,
        dress_code_data: string,
        video_link: string,
        // shuttle bus
        shuttle_bus: string,
        time: string,
        pick_up_location: string,
        pick_up_location_data: string,
    }
    events: {
        title: string,
        date: string,
        events: Event[],
    },
    gallery: {
        gallery: string,
        sections: {
            title: string,
            memories: Memory[],
        }[]
    }
}

export const L: { [locale: string]: Data } = {
    "en": {
        layout: {
            home: "Home",
            information: "Wedding Day Information",
            events: "Upcoming Events",
            story: "Our Story",
            gallery: "Our Gallery",
        },
        home: {
            wedding_day: "Wedding Day",
            story: "Our Story",
            info: "Information",
            about_us: "About Us",
            des1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at sapien ac leo pellentesque volutpat in ut erat. Aliquam faucibus ultrices auctor. Curabitur convallis tempus sem, at tincidunt ex vestibulum nec. Sed nisi arcu, interdum scelerisque felis ut, tempor pellentesque erat. Etiam viverra vestibulum leo, vitae aliquet urna cursus nec. Duis lobortis diam ut lacinia bibendum. Nulla fermentum odio dui, vel tristique sapien ornare non. Morbi molestie lobortis varius. Curabitur id molestie tortor, a convallis odio. Aenean mattis nunc nunc, scelerisque tincidunt sapien condimentum eu.",
            des2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at sapien ac leo pellentesque volutpat in ut erat. Aliquam faucibus ultrices auctor. Curabitur convallis tempus sem, at tincidunt ex vestibulum nec. Sed nisi arcu, interdum scelerisque felis ut, tempor pellentesque erat. Etiam viverra vestibulum leo, vitae aliquet urna cursus nec. Duis lobortis diam ut lacinia bibendum. Nulla fermentum odio dui, vel tristique sapien ornare non. Morbi molestie lobortis varius. Curabitur id molestie tortor, a convallis odio. Aenean mattis nunc nunc, scelerisque tincidunt sapien condimentum eu.",
            day_until: "Date We Getting Married",
            days: "Days",
            hours: "Hours",
            minutes: "Minutes",
            seconds: "Seconds",
        },
        info: {
            location: "Location",
            details: "Details",
            gallery: "Gallery",
            title: "Wedding Day Information",
            // details 
            date_time: "Date & Time",
            date_time_data: "5 March 2022, 13 : 30 - 16 : 30",
            location_data: "Auberge Discovery Bay Hotel, Hong Kong",
            dress_code: "Dress Code",
            dress_code_data: "Semi-formal",
            video_link: "Video Link",
            // shuttle bus
            shuttle_bus: "Shuttle Bus",
            time: "Time",
            pick_up_location: "Pick Up Location",
            pick_up_location_data: "Sunny Bay Station exit A",
        },
        events: {
            title: "Upcoming Events",
            date: "Date",
            events: [
                {
                    title: "Propose",
                    description: "this is a sample description",
                    date: "2022-01-22",
                },
                {
                    title: "this is a sample title",
                    description: "this is a sample description",
                    date: "2022-01-22",
                }, {
                    title: "this is a sample title",
                    description: "this is a sample description",
                    date: "2022-01-22",
                },
                {
                    title: "this is a sample title",
                    description: "this is a sample description",
                    date: "2022-01-22",
                }
            ]
        },
        gallery: {
            gallery: "Gallery",
            sections: [
                {
                    title: "Proposal",
                    memories: [
                        {
                            title: "sample title",
                            description: "if you have something to say about this photos, you can give me a description and title"
                        }
                    ]
                },
                {
                    title: "Pre-wedding",
                    memories: [

                    ]
                }
            ]
        }
    },
    "zh-hk": {
        layout: {
            home: "主頁",
            information: "詳情",
            events: "流程",
            story: "我們的故事",
            gallery: "相簿",
        },
        home: {
            wedding_day: "婚禮",
            story: "Our Story",
            info: "婚禮詳情",
            about_us: "關於我們",
            des1: "纖雲弄巧，飛星傳恨，銀漢迢迢暗度。金風玉露一相逢，便勝卻人間無數。柔情似水，佳期如夢，忍顧鵲橋歸路。兩情若是久長時，又豈在朝朝暮暮。纖雲弄巧，飛星傳恨，銀漢迢迢暗度。金風玉露一相逢，便勝卻人間無數。柔情似水，佳期如夢，忍顧鵲橋歸路。兩情若是久長時，又豈在朝朝暮暮。",
            des2: "纖雲弄巧，飛星傳恨，銀漢迢迢暗度。金風玉露一相逢，便勝卻人間無數。柔情似水，佳期如夢，忍顧鵲橋歸路。兩情若是久長時，又豈在朝朝暮暮。纖雲弄巧，飛星傳恨，銀漢迢迢暗度。金風玉露一相逢，便勝卻人間無數。柔情似水，佳期如夢，忍顧鵲橋歸路。兩情若是久長時，又豈在朝朝暮暮。",
            day_until: "離我們婚禮還有...",
            days: "天",
            hours: "時",
            minutes: "分",
            seconds: "秒",
        },
        info: {
            location: "地點",
            details: "詳情",
            gallery: "圖片",
            title: "婚禮詳情",
            // details 
            date_time: "日期及時間",
            date_time_data: "2022 年 3 月 5 日，13 : 30 - 16 : 30",
            location_data: "香港愉景灣酒店",
            dress_code: "著裝規範",
            dress_code_data: "半正式",
            video_link: "直播片段",
            // shuttle bus
            shuttle_bus: "接駁巴士",
            time: "時間",
            pick_up_location: "接載地點",
            pick_up_location_data: "欣澳站 A 出口"
        },
        events: {
            title: "流程",
            date: "日期",
            events: [
                {
                    title: "求婚",
                    description: "這是例子內容",
                    date: "2022-01-22",
                },
                {
                    title: "這是例子標題",
                    description: "這是例子內容",
                    date: "2022-01-22",
                },
                {
                    title: "這是例子標題",
                    description: "這是例子內容",
                    date: "2022-01-22",
                },
                {
                    title: "這是例子標題",
                    description: "這是例子內容",
                    date: "2022-01-22",
                },
            ],
        },
        gallery: {
            gallery: "相簿",
            sections: [
                {
                    title: "求婚",
                    memories: [
                        {
                            title : "例子標題", 
                            description : "如果你對這張照片有什麼想說的，你可以給我一個描述和標題"
                        }
                    ]
                }, {
                    title: "婚紗照",
                    memories: []
                }
            ]
        }
    }
}
