import * as FaIcons from 'react-icons/fa';
import * as MdIcons from 'react-icons/md';

export const SidebarData = [
  {
    title: 'Inicio',
    path: '/inicio',
    icon: <FaIcons.FaHome />
  },
  {
    title: 'Sobre mim',
    path: '/sobremim',
    icon: <MdIcons.MdPerson />
  },
  {
    title: 'Currículo',
    path: '/curriculo',
    icon: <FaIcons.FaRegFileAlt />
  },
  {
    title: 'Contato',
    path: '/contato',
    icon: <MdIcons.MdOutlineContactPage />
  }
];
