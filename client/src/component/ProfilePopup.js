import React from 'react';
import styles from './../scss/ProfilePopup.module.scss';
import faceIcon from './../imgs/faceIcon.svg';

function ProfilePopup() {
    return (
        <div className={styles.PwhiteCard}>
            <div className={styles.contents}>
                <div className={styles.title}>
                    <p className={styles.test1}>
                        <p><strong className={styles.emphasis0}>임태헌</strong>님</p>
                        <p>환영합니다! <strong className={styles.emphasis3}>😆</strong></p>
                    </p>
                    <img src={faceIcon} ></img>
                </div>
                <div className={styles.detail}>
                    <p className={styles.test2}>수강신청</p>
                    <p className={styles.test2}>개인정보수정</p>
                    <p className={styles.test2}>로그아웃</p>
                </div>
            </div>
        </div>
    )
};

export default ProfilePopup;