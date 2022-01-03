import moment from "moment"
import image1 from "../public/images/P1322586_e.jpg"

type Event = {
    image: typeof image1,
    title: string,
    description: string,
    time: moment.Moment,
}

export type Data = { 
    layout: { 
        home : string , 
        information : string  , 
        events : string , 
        story : string , 
        gallery : string ,  
    }, 
    home :  { 
        wedding_day: string, 
        story : string , 
        info : string, 
        about_us : string , 
        des1 : string, 
        des2 : string , 
        day_until : string,
        days: string, 
        hours : string , 
        minutes : string , 
        seconds : string , 
    }, 
    events : {
        title : string, 
        events : Event[],  
    }
}

export const L : {[locale:string] : Data } = { 
    "en" : { 
        layout: { 
            home : "Home" , 
            information : "Wedding Day Information" , 
            events : "Upcoming Events" , 
            story : "Our Story" , 
            gallery  : "Our Gallery" , 
        }, 
        home :{
            wedding_day : "Wedding Day" , 
            story : "Our Story" , 
            info : "Information" , 
            about_us : "About Us" , 
            des1 : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at sapien ac leo pellentesque volutpat in ut erat. Aliquam faucibus ultrices auctor. Curabitur convallis tempus sem, at tincidunt ex vestibulum nec. Sed nisi arcu, interdum scelerisque felis ut, tempor pellentesque erat. Etiam viverra vestibulum leo, vitae aliquet urna cursus nec. Duis lobortis diam ut lacinia bibendum. Nulla fermentum odio dui, vel tristique sapien ornare non. Morbi molestie lobortis varius. Curabitur id molestie tortor, a convallis odio. Aenean mattis nunc nunc, scelerisque tincidunt sapien condimentum eu." , 
            des2 : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at sapien ac leo pellentesque volutpat in ut erat. Aliquam faucibus ultrices auctor. Curabitur convallis tempus sem, at tincidunt ex vestibulum nec. Sed nisi arcu, interdum scelerisque felis ut, tempor pellentesque erat. Etiam viverra vestibulum leo, vitae aliquet urna cursus nec. Duis lobortis diam ut lacinia bibendum. Nulla fermentum odio dui, vel tristique sapien ornare non. Morbi molestie lobortis varius. Curabitur id molestie tortor, a convallis odio. Aenean mattis nunc nunc, scelerisque tincidunt sapien condimentum eu." , 
            day_until : "Date We Getting Married" , 
            days : "Days" , 
            hours : "Hours" , 
            minutes : "Minutes" , 
            seconds : "Seconds" ,  
        } , 
        events :{ 
            title : "Upcoming Events" , 
            events :  [
                {
                    image : image1 ,
                    title : "this is a sample title" , 
                    description : "this is a sample description" , 
                    time : moment("2022-01-22"),
                },
                {
                    image : image1 ,
                    title : "this is a sample title" , 
                    description : "this is a sample description" , 
                    time : moment("2022-01-22"),
                }
            ] 
        }
    }, 
    "zh-hk" : { 
        layout: { 
            home : "主頁" , 
            information : "詳情" , 
            events : "活動" , 
            story : "我們的故事" , 
            gallery  : "相簿" , 
        }, 
        home :{
            wedding_day : "Wedding Day" , 
            story : "Our Story" , 
            info : "婚禮詳情" , 
            about_us : "關於我們" , 
            des1 : "乾它食去口主左聲跳老尼根意，弟開婆支卜時行兩，樹雪定見蝶打豆放裏未山方訴苗。跑來布半不：隻爬交？爸故方。汁收鴨笑首氣幼校年甲實福三「母員」具共要道快久示心比風，土枝借色久遠神上親高點像奶忍童：西綠旦。" , 
            des2 : "乾它食去口主左聲跳老尼根意，弟開婆支卜時行兩，樹雪定見蝶打豆放裏未山方訴苗。跑來布半不：隻爬交？爸故方。汁收鴨笑首氣幼校年甲實福三「母員」具共要道快久示心比風，土枝借色久遠神上親高點像奶忍童：西綠旦。" , 
            day_until : "離我們婚禮還有..." , 
            days : "天" , 
            hours : "時" , 
            minutes : "分" , 
            seconds : "秒" ,  
        }, 
        events : { 
            title : "活動" , 
            events : [], 
        }
    }
}
