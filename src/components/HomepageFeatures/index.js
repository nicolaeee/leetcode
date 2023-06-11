import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/mainTwo.svg').default,
    description: (
      <>
       Task are grouped in the categories in the Problems folder
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/main.svg').default,
    description: (
      <>
       All the solution are copy-passted from LeetCode
      </>
    ),
  },
  {
    title: 'Still Improving',
    Svg: require('@site/static/img/mainThree.svg').default,
    description: (
      <>
      I do my best with this solutions
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
