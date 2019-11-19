import 'datatables.net-dt/js/dataTables.dataTables.min';
import '../libs/dataTables.responsive.min';
import '../libs/jquery.scrollbar.min';

let t_table = ".js-datatable-trading";
let r_table = ".js-datatable-rates";
let table = ".js-datatable";
let s_tableClass = ".js-datatable-summary";

// datatables
var t_datatable = $(t_table).DataTable({
    "paging": false,
    responsive: true,
    "order": [],
    "autoWidth": false,
    "scrollY": "500px",
    //"scrollCollapse": true,
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
        "bScrollCollapse": true,
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
});

let s_table = $(s_tableClass).DataTable({
    "order": [],
    "pageLength": 9999,
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


$('#summary').on('keyup', function () {
    s_table.search(this.value).draw();
});