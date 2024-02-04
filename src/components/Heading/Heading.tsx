import { GithubIcon, QwikLogo } from '../icons';
import s from './Heading.module.css';

export default function Heading() {
  return (
    <>
      <div class={s.Heading}>
        <h1>Search guitar chords</h1>
        <div>
          powered by{' '}
          <a
            href='https://typesense.org/'
            target='_blank'
            rel='noopener noreferrer'
            id={s.typesense}
          >
            type<b>sense</b>|
          </a>{' '}
          & <QwikLogo id={s.qwikLogo} />
        </div>
      </div>
      <a
        href='https://github.com/typesense/showcase-guitar-chords-search-next-js'
        target='_blank'
        rel='noopener noreferrer'
        id={s.githubLink}
        title='Github repo'
      >
        <GithubIcon />
      </a>
    </>
  );
}
