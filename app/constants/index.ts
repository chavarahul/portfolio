import { NextFont } from 'next/dist/compiled/@next/font'
import { Pacifico, Poppins ,Roboto ,Rubik_Vinyl, Rubik_Iso, Rubik_Burned} from 'next/font/google'
import { projectCardType, skillsType } from './Types/types'

//Font Section
export const pacifico : NextFont = Pacifico({ subsets: ['latin'], weight: '400' })
export const poppin : NextFont = Poppins({ subsets: ['latin'], weight: ['400', '500', '300', '600'] })
export const roboto : NextFont  = Roboto({subsets:['latin'],weight:['100','300','400','700','900']})
export const rubik : NextFont = Rubik_Iso({subsets:['latin'],weight:['400']})
export const rburned : NextFont  = Rubik_Burned({subsets:['latin'],weight:['400']})
export const vinyl : NextFont = Rubik_Vinyl({subsets:['latin'],weight:['400']})

export const projects : projectCardType[] = [
    {id:1,image:require('@/public/web1.jpg'),title:"Task Manager App",description:"TaskBoost is an application designed to help users manage their tasks efficiently. Users can create new tasks and update existing ones based on their work or personal requirements. The application incorporates a robust user authentication system to ensure secure access and task management."},
    {id:2,image:require('@/public/web2.jpg'),title:"Movie App",description:"MovieApp is an application that leverages an API to showcase movie images and names according to user input. This user-friendly app is designed to provide a seamless experience for movie enthusiasts who want quick access to information about their favorite films."}
]
export const skills : skillsType[] = [
    {id:1,skills:["Reactjs","nextjs","prisma","mongodb"]},
    // {id:2,skills:["reactjs"]}
]