import 'datatables.net-dt/js/dataTables.dataTables.min';
import '../libs/dataTables.responsive.min';
import '../libs/jquery.scrollbar';

let t_table = ".js-datatable-trading";
let r_table = ".js-datatable-rates";
let table = ".js-datatable";
let s_tableClass = ".js-datatable-summary";
let viewportWidth = window.innerWidth || document.documentElement.clientWidth;

// datatables
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
        $('.dataTables_scrollBody').scrollbar();
    }
})


var r_datatable = $(r_table).DataTable({
    "pageLength": 15,
    "order": [],
    responsive: true,
    "autoWidth": false,
    columnDefs: [{
            responsivePriority: 1,
            targets: 0
        },
        {
            responsivePriority: 2,
            targets: -1
        }
    ]
});

$(table).each(function () {
    let p_length = $(this).data('page-size');
    let p_sorting = !$(this).attr('sort');

    $(this).DataTable({
        "order": [],
        'ordering': p_sorting,
        "pageLength": p_length,
        //"scrollX": '100%',
        "autoWidth": false,
        //responsive: true,
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

            $('.dataTables_scrollBody').scrollbar();
        }
    });
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
        $('.dataTables_scrollBody').scrollbar();
    }
});
$('#summary').on('keyup', function () {
    s_table.search(this.value).draw();
});