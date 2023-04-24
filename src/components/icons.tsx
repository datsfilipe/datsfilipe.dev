import type { IconType } from 'react-icons'
import {
  TbSun,
  TbMoon,
  TbBrandGithub,
  TbBrandTwitter,
  TbBrandLinkedin,
  TbBrandReddit,
  TbMail,
  TbBrandYoutube,
  TbHeart,
  TbCoffee,
  TbWorld,
  TbFileText,
  TbHome,
  TbWritingSign,
  TbMessage,
  TbBrandTypescript,
  TbStar,
  TbTerminal,
  TbLanguage,
} from 'react-icons/tb'

import { SiLua } from 'react-icons/si'

type IconsType = {
  [key: string]: IconType
}

export const Icons: IconsType = {
  Sun: TbSun,
  Moon: TbMoon,
  Github: TbBrandGithub,
  Twitter: TbBrandTwitter,
  Reddit: TbBrandReddit,
  Linkedin: TbBrandLinkedin,
  Mail: TbMail,
  Youtube: TbBrandYoutube,
  Heart: TbHeart,
  Coffee: TbCoffee,
  World: TbWorld,
  FileText: TbFileText,
  Home: TbHome,
  WritingSign: TbWritingSign,
  Message: TbMessage,
  Typescript: TbBrandTypescript,
  Star: TbStar,
  Shell: TbTerminal,
  Language: TbLanguage,
  Lua: SiLua,
}