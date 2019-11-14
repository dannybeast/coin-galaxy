import $ from 'jquery';
import 'datatables.net-dt/js/dataTables.dataTables.min';
import '../libs/dataTables.responsive.min';

let t_table = ".trading .js-datatable";
let r_table = ".rates .js-datatable";

// datatables
var t_datatable = $(t_table).DataTable({
    "pageLength": 60,
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
var r_datatable = $(r_table).DataTable({
    "pageLength": 15,
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