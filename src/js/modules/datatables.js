import 'datatables.net-dt/js/dataTables.dataTables.min';
import '../libs/dataTables.responsive.min';
import '../libs/jquery.scrollbar';

let t_table = ".js-datatable-trading";
let r_table = ".js-datatable-rates";
let table = ".js-datatable";
let s_tableClass = ".js-datatable-summary";
let viewportWidth = window.innerWidth || document.documentElement.clientWidth;

// datatables
$(table).each(function () {
    let p_length = $(this).data('page-size');
    let p_sorting = !$(this).attr('sort');
    //let p_scrollX = !$(this).attr('scrollx');
    $(this).DataTable({
        "order": [],
        'ordering': p_sorting,
        "pageLength": p_length,
        //"scrollX": p_scrollX,
        "autoWidth": false,
        responsive: false,
        columnDefs: [{
                responsivePriority: 1,
                targets: 0
            },
            {
                responsivePriority: 2,
                targets: -1
            }
        ],

    });

    $(this).wrap('<div class="scrollbar-inner scr-y-none"></div>');
});


let s_table = $(s_tableClass).DataTable({
    "order": [],
    "paging": false,
    "sScrollX": '100%',
    "scrollY": "350px",
    "autoWidth": false,
    responsive: true,
    columnDefs: [{
            responsivePriority: 1,
            targets: 0
        },
        {
            responsivePriority: 2,
            targets: -1
        }
    ],
    "fnInitComplete": function () {
        $('.dataTables_scrollBody').addClass('scrollbar-inner');
        $('.dataTables_scrollBody').scrollbar();
    }
});

$('.js-info-table').DataTable({
    "order": [],
    "paging": false,
    "sScrollX": '100%',
    "scrollY": "350px",
    "autoWidth": false,
    responsive: true,
    columnDefs: [{
            responsivePriority: 1,
            targets: 0
        },
        {
            responsivePriority: 2,
            targets: -1
        }
    ],
    "fnInitComplete": function () {
        $('.dataTables_scrollBody').addClass('scrollbar-inner');
        $('.dataTables_scrollBody').scrollbar();
    }
});


var t_datatable = $(t_table).DataTable({
    "paging": false,
    "order": [],
    "autoWidth": false,
    "scrollY": "500px",
    "searching": false,
    "info": false,
    "sScrollX": '100%',
    "responsive": true,
    columnDefs: [{
            responsivePriority: 1,
            targets: 0
        },
        {
            responsivePriority: 2,
            targets: -1
        }
    ],
    "fnInitComplete": function () {
        $('.dataTables_scrollBody').addClass('scrollbar-inner');
        $('.dataTables_scrollBody').scrollbar();
    }
})


$('#summary-search').on('keyup', function () {
    s_table.search(this.value).draw();
});


// tabs
let tabs = $('.js-radio-tabs');


tabs.each(function () {
    let btn = $(this).find('input[type="radio"]');
    let checkedTab = $(this).find('input:checked').val();
    let tabs = $(this);

    showTab(tabs, checkedTab);

    function showTab(tabs, val) {
        tabs.find(`*[data-tab-content]`).removeClass('active');
        tabs.find(`*[data-tab-content="${val}"]`).addClass('active');
        if (tabs.find('.js-datatable-summary')) {
            $(s_tableClass).DataTable().columns.adjust().draw();
        }
        if (tabs.find('.js-datatable-trading')) {
            $(t_table).DataTable().columns.adjust().draw();
        }
    }

    btn.click(function () {
        let val = $(this).val();
        showTab(tabs, val);
    });
});