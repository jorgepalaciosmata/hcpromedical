import React, { Component, Fragment } from 'react';
import withModal from '@Elements/Modal';

import FileIcon from '@Image/file.png';
import FolderIcon from '@Image/folder.png';

import { Icon, Logo, Img, Details } from './styles';

const monthNames = [
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiembre',
  'Octubre',
  'Noviembre',
  'Diciembre'
];

const nth = d => {
  if (d > 3 && d < 21) return 'th';
  switch (d % 10) {
    case 1:
      return 'st';
    case 2:
      return 'nd';
    case 3:
      return 'rd';
    default:
      return 'th';
  }
};
const formatDate = value => {
  let date = new Date(value);
  var day = date.getDate(),
    monthIndex = date.getMonth(),
    year = date.getFullYear().toString();
  return `${day} de ${monthNames[monthIndex]}, ${year}`;
};

class FileInfo extends Component {
  render() {
    const { entry } = this.props;
    let ext = entry.name.split('.').filter(el => el);
    ext = ext[ext.length - 1];
    return (
      <Fragment>
        <Icon>
          <Logo>
            <Img src={entry.type == 'file' ? FileIcon : FolderIcon} 
              style={{tintColor: 'red'}}/>
            {entry.type == 'file' ? <span>{`.${ext}`}</span> : ''}
          </Logo>
        </Icon>

        <Details.Container>
          <Details.Info>
            <Details.Label>Nombre:</Details.Label>
            <Details.Value>{entry.name}</Details.Value>
          </Details.Info>
          <Details.Info>
            <Details.Label>Tamaño:</Details.Label>
            <Details.Value>{entry.size ? entry.size + ' kb' : '-'}</Details.Value>
          </Details.Info>
          {/* <Details.Info>
            <Details.Label>Creator Name:</Details.Label>
            <Details.Value>{entry.creatorName}</Details.Value>
          </Details.Info> */}
          <Details.Info>
            <Details.Label>Fecha de captura:</Details.Label>
            <Details.Value>{formatDate(entry.date)}</Details.Value>
          </Details.Info>
        </Details.Container>
      </Fragment>
    );
  }
}

export default withModal(FileInfo)({
  style: {
    position: 'absolute',
    zIndex: 4000
  }
});
