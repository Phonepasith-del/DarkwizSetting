/* =========================================
   DARKWIZ SETTINGS
========================================= */


/*
    เก็บ Mode ไว้ใน Browser

    ตัวอย่าง:
    Low
    Med
    High
    Super
*/

let selectedMode =
    localStorage.getItem("darkwizMode");


/* =========================================
   PAGE LOAD
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        /*
            ถ้ามี Mode ที่เคยเลือกไว้
            ให้แสดงเป็น Selected
        */

        if (selectedMode) {

            const modeElement =
                document.querySelector(
                    `[data-mode="${selectedMode}"]`
                );

            if (modeElement) {

                modeElement.classList.add(
                    "selected"
                );

                showStatus(
                    selectedMode +
                    " mode is active.",
                    "#2998ff"
                );

            }

        }

    }
);


/* =========================================
   SELECT MODE
========================================= */

function selectMode(element) {

    const modes =
        document.querySelectorAll(".mode");


    /*
        ล้าง Highlight จากทุก Mode
    */

    modes.forEach(mode => {

        mode.classList.remove(
            "selected"
        );

    });


    /*
        Highlight ตัวที่เลือก
    */

    element.classList.add(
        "selected"
    );


    /*
        เก็บ Mode
    */

    selectedMode =
        element.dataset.mode;


    /*
        ยังไม่บันทึกลง LocalStorage
        จนกว่าจะกด Select Mode
    */

    showStatus(
        selectedMode +
        " selected.",
        "#2998ff"
    );

}


/* =========================================
   RUN MODE
========================================= */

function runMode() {


    /*
        ถ้ายังไม่ได้เลือก
    */

    if (!selectedMode) {

        showStatus(
            "Please select a mode first.",
            "#ff5570"
        );

        return;
    }


    /*
        บันทึก Mode
        ทำให้ Mode ค้าง
    */

    localStorage.setItem(
        "darkwizMode",
        selectedMode
    );


    /*
        เปลี่ยนข้อความ Loading
    */

    const loadingSubtitle =
        document.getElementById(
            "loadingSubtitle"
        );


    loadingSubtitle.textContent =
        "Loading: Above " +
        selectedMode +
        " Mode for Darkwiz";


    /*
        ซ่อน Dashboard
    */

    const dashboard =
        document.getElementById(
            "dashboardPage"
        );


    dashboard.style.opacity = "0";


    dashboard.style.transform =
        "scale(.98)";


    /*
        เปิด Loading Screen
    */

    const loading =
        document.getElementById(
            "loadingScreen"
        );


    loading.classList.add(
        "active"
    );


    /*
        จำลองการ Initializing

        2.8 วินาที
    */

    setTimeout(() => {


        /*
            ปิด Loading
        */

        loading.classList.remove(
            "active"
        );


        /*
            แสดง Dashboard กลับมา
        */

        dashboard.style.opacity = "1";

        dashboard.style.transform =
            "scale(1)";


        /*
            แสดง Mode ที่ใช้งาน
        */

        showStatus(
            selectedMode +
            " mode applied successfully.",
            "#32d6ff"
        );


    }, 2800);

}


/* =========================================
   RESET SETTINGS
========================================= */

function resetSettings() {


    /*
        ลบ Mode ที่บันทึกไว้
    */

    localStorage.removeItem(
        "darkwizMode"
    );


    /*
        ล้างตัวแปร
    */

    selectedMode = null;


    /*
        เอา Selected ออกจากทุก Mode
    */

    const modes =
        document.querySelectorAll(
            ".mode"
        );


    modes.forEach(mode => {

        mode.classList.remove(
            "selected"
        );

    });


    /*
        แสดงข้อความ
    */

    showStatus(
        "Settings reset successfully.",
        "#7f9bb5"
    );

}


/* =========================================
   STATUS
========================================= */

function showStatus(
    text,
    color
) {

    const status =
        document.getElementById(
            "status"
        );


    status.textContent = text;

    status.style.color = color;

    status.style.opacity = "1";


    /*
        ซ่อนข้อความหลังจาก 3 วินาที
    */

    clearTimeout(
        window.statusTimer
    );


    window.statusTimer =
        setTimeout(() => {

            status.style.opacity = "0";

        }, 3000);

}