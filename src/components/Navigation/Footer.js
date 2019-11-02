import React from 'react';
import {useSelector} from 'react-redux';
import useStyles from 'isomorphic-style-loader/useStyles';
import {getTranslator} from '../../selectors/translate';
import styles from './Footer.scss';
import DyslexiaSwitch from './DyslexiaSwitch';

const Footer = () => {
  useStyles(styles);

  const t = useSelector(state => getTranslator(state));
  const isStudentMode = useSelector(state => state.isStudentMode);

  const url = {
    wiki: 'https://github.com/kodeklubben/oppgaver/wiki',
    sparebank: 'https://www.sparebank1.no',
    ibok: 'https://ibok.no/',
    excited: 'http://www.ntnu.edu/web/excited',
    ntnu_idi: 'https://www.ntnu.edu/idi/',
    uio_ifi: 'http://www.mn.uio.no/ifi/',
    teknograd: 'https://www.teknograd.no/',
    tekna: 'https://www.tekna.no/',
    samsung: 'https://www.samsung.com/no/innovation/'
  };

  const sponsors = (
    <div className={styles.sponsors}>
      <a href={url.sparebank} target='_blank' rel='noopener'>
        <img className={styles.img} src={require('../../assets/graphics/smn.jpg')}
          alt={'SpareBank1'}
        />
      </a>
      <a href={url.ibok} target='_blank' rel='noopener'>
        <img className={styles.img} src={require('../../assets/graphics/ibok.jpg')}
          alt={'Ibok'}
        />
      </a>
      <a href={url.teknograd} target='_blank' rel='noopener'>
        <img className={styles.img} src={require('../../assets/graphics/teknograd.png')}
          alt={'Teknograd'}
        />
      </a>
      <a href={url.tekna} target='_blank' rel='noopener'>
        <img className={styles.img} src={require('../../assets/graphics/tekna.jpg')}
          alt={'Tekna'}
        />
      </a>
      <a href={url.ntnu_idi} target='_blank' rel='noopener'>
        <img className={styles.img} src={require('../../assets/graphics/ntnu_idi.png')}
          alt={'NTNU institutt for datateknologi og informatikk'}
        />
      </a>
      <a href={url.excited} target='_blank' rel='noopener'>
        <img className={styles.img} src={require('../../assets/graphics/excITEd.png')}
          alt={'excited'}
        />
      </a>
      <a href={url.uio_ifi} target='_blank' rel='noopener'>
        <img className={styles.img} src={require('../../assets/graphics/uio_ifi.png')}
          alt={'UIO institutt for informatikk'}
        />
      </a>
      <a href={url.samsung} target='_blank' rel='noopener'>
        <img className={styles.img} src={require('../../assets/graphics/samsung.png')}
          alt={'Samsung'}
        />
      </a>
    </div>
  );

  return (
    <div className={isStudentMode ? styles.containerStudent : styles.containerTeacher} role='contentinfo'>
      <a href={url.wiki} target='_blank' rel='noopener'>
        <img className={styles.svg} src={require('../../assets/graphics/github.png')} alt={'GitHub'}/>
        <p className={styles.contribute}>{t('footer.contribute')}</p>
      </a>
      <div className={styles.centerSwitch}><DyslexiaSwitch/></div>
      <div className={styles.divider}/>
      {sponsors}
    </div>);
};

export default Footer;
