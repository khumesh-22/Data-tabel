$(document).ready(function () {
    var table = $("#datatable").DataTable({
        "paging": true,
        "ordering": true,
        "searching": true,
        "columnDefs": [
            {
                "searchable": false,
                "orderable": false,
            }
        ],
        "order": [[1, 'asc']],
        "responsive": true, 
        "dom": '<"top"lf>rt<"bottom"ip>'
    })
});
new DataTable('#example', {
    responsive: true,
    rowReorder: {
        selector: 'td:nth-child(2)'
    }
});