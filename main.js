var app = new Vue ({
    el: '#root',
    data: {
        header_logo: {
            name: 'dark-logo'
        },
        array_dropdown: ['Home', 'Pages', 'Courses', 'Features', 'Blog', 'Shop'],
        ul_address: 'Address',
        li_address: ['382 NE 191st St # 87394 Miami, FL 33179-3899',
                    '+1 (305) 547-9909 (9am - 5pm EST, Monday - Friday)',
                    'support@maxcoach.com'],
        links_explore: ['Start here', 'Blog', 'About us'],
        links_general: ['Success story', 'Courses', 'Contact us'],
        links_information: ['Membership', 'Purchase guide', 'Privacy policy', 'Terms of service'],
        info_copyright: '© 2020 Maxcoach. All Rights Reserved'
    }
})
