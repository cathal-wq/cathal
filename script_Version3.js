function exportToExcelFile() {
    const percentage = Math.round((gameState.score / gameState.totalScore) * 100);
    const now = new Date();
    const dateStr = now.toLocaleString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });

    // Create data array
    const data = [
        ['Student Geography Quiz Results - Coastal Erosion'],
        [],
        ['Student Name', gameState.studentName],
        ['Score', gameState.score],
        ['Total Possible', gameState.totalScore],
        ['Percentage', percentage + '%'],
        ['Date/Time', dateStr],
        [],
        ['Feedback'],
        ['Your achievement level and personalized feedback would appear here']
    ];

    // Create workbook
    const ws = XLSX.utils.aoa_to_sheet(data);
    
    // Style the worksheet (optional)
    ws['!cols'] = [{ wch: 25 }, { wch: 30 }];
    
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Results');
    
    // Download
    XLSX.writeFile(wb, `${gameState.studentName}_Quiz_Score.xlsx`);
}