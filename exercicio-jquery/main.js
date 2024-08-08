$(document).ready(function () {
    $('#task-form').on('submit', function (e) {
        e.preventDefault();

        const taskText = $('#task-input').val().trim();
        if (taskText !== "") {
            $('#task-list').append(`
                <li>
                    <span class="task-text">${taskText}</span>
                    <button class="delete-button">
                        &#128465;
                    </button>
                </li>
            `);
            $('#task-input').val('');
        }
    });

    $('#task-list').on('click', 'li', function (e) {
        if (!$(e.target).hasClass('delete-button')) {
            $(this).find('.task-text').toggleClass('completed');
        }
    });

    $('#task-list').on('click', '.delete-button', function (e) {
        e.stopPropagation();
        $(this).closest('li').remove();
    });
});