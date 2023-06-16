import React from "react";
import styles from "./../scss/Lec.module.scss";
import HeaderNav from "./../component/HeaderNav";
import Footer from "./../component/Footer";
import Lec from "./../component/Lec";
import Lec_notice from"./../component/Lec_notice";
import Lec_file from "./../component/Lec_file";
import Lec_lecture from "./../component/Lec_lecture";
import Lec_ass from "./../component/Lec_ass";
import Lec_check from "./../component/Lec_check";
import { Col, Container, Row } from "react-bootstrap";
import Stack from 'react-bootstrap/Stack';

export default function LecPage() {
    return (
        <>
            <HeaderNav />
            <Lec />

            <Stack direction="horizontal" gap={2} className={styles.hbox_lec} >
                <Stack gap={3}>
                    <Stack direction="horizontal" gap={3} >
                        <div > <Lec_notice /> </div>
                        <div > <Lec_file /> </div>
                    </Stack>
                    <Stack direction="horizontal" gap={3} >
                        <div> <Lec_lecture /> </div>
                        <div> <Lec_ass /> </div>
                    </Stack>
                </Stack>
                <div>
                    <Lec_check />
                </div>
            </Stack>

            <Footer />
        </>
    );
};
