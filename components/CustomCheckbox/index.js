import styles from './CustomCheckbox.module.scss';
import classNames from 'classnames/bind';
let cx = classNames.bind(styles);

function CustomCheckbox() {
  return (
    <label className={cx('container')}>
      <input type="checkbox" />
      <span className={cx('checkmark')}></span>
    </label>
  );
}

export default CustomCheckbox;
