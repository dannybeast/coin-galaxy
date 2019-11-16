import 'datatables.net-dt/js/dataTables.dataTables.min';
import '../libs/dataTables.responsive.min';

let t_table = ".js-datatable-trading";
let r_table = ".js-datatable-rates";
let table = ".js-datatable";

// datatables
var t_datatable = $(t_table).DataTable({
    "pageLength": 60,
    responsive: true,
    "order": [],
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

    console.log(p_sorting)

    $(this).DataTable({
        "order": [],
        'ordering': p_sorting,
        "pageLength": p_length,
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