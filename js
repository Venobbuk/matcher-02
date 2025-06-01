
// Add CSS and JavaScript with fixed jQuery loading
add_action('admin_head', function() {
   if (isset($_GET['page']) && $_GET['page'] === 'kt-cigar-matcher') {
       ?>
       <style>
       .kt-cigar-matcher {
           margin: 20px 0;
       }
       
       .tab-content {
           display: none;
           margin-top: 20px;
       }

       .tab-content.active {
           display: block;
       }

       .kt-dashboard {
           background: #fff;
           padding: 20px;
           border: 1px solid #ccd0d4;
           box-shadow: 0 1px 1px rgba(0,0,0,.04);
       }

       .kt-stats-grid {
           display: grid;
           grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
           gap: 20px;
           margin-bottom: 30px;
       }

       .kt-stat-card {
           background: #f8f9fa;
           border: 1px solid #e1e1e1;
           border-radius: 4px;
           padding: 20px;
           text-align: center;
       }

       .kt-stat-card h3 {
           margin: 0 0 10px;
           font-size: 14px;
           color: #666;
           text-transform: uppercase;
       }

       .kt-stat-number {
           font-size: 32px;
           font-weight: bold;
           color: #0073aa;
       }

       .kt-recent-activity h3 {
           border-bottom: 1px solid #ddd;
           padding-bottom: 10px;
           margin-bottom: 20px;
       }

       .kt-upload-section {
           background: #fff;
           padding: 20px;
           border: 1px solid #ccd0d4;
           box-shadow: 0 1px 1px rgba(0,0,0,.04);
       }

       .progress-bar {
           width: 100%;
           height: 20px;
           background: #f0f0f0;
           border-radius: 10px;
           overflow: hidden;
           margin-top: 10px;
       }

       .progress-fill {
           height: 100%;
           background: linear-gradient(45deg, #0073aa, #00a0d2);
           animation: progress-animation 2s infinite;
           width: 30%;
       }

       @keyframes progress-animation {
           0% { width: 10%; }
           50% { width: 70%; }
           100% { width: 30%; }
       }

      .kt-products-section {
    background: #fff;
    padding: 10px;
    border: 1px solid #ccd0d4;
    box-shadow: 0 1px 1px rgba(0,0,0,.04);
}

.kt-products-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    padding-bottom: 8px;
    border-bottom: 1px solid #ddd;
}

       .kt-products-actions {
           display: flex;
           gap: 10px;
           align-items: center;
       }

     .kt-compact-table {
    font-size: 10px;
    border-collapse: collapse;
}

.kt-compact-table td {
    padding: 3px 2px;
    vertical-align: top;
    border-bottom: 1px solid #eee;
    line-height: 1.2;
}

.kt-compact-table th {
    padding: 4px 2px;
    font-size: 9px;
    font-weight: 600;
    background: #f8f9fa;
    border-bottom: 2px solid #ddd;
    text-align: left;
}

       .kt-compact-table tr:hover {
           background-color: #f9f9f9;
       }

      /* Pagination Controls */
.kt-pagination-controls {
    background: #f9f9f9;
    border: 1px solid #ddd;
    padding: 5px 8px;
    border-radius: 3px;
    margin: 8px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 5px;
}

.kt-pagination-info {
    font-size: 11px;
    color: #666;
}

.kt-pagination-size {
    display: flex;
    align-items: center;
    gap: 3px;
    font-size: 11px;
}

.kt-pagination-size select {
    padding: 1px 3px;
    border: 1px solid #ccc;
    border-radius: 2px;
}

.kt-pagination-links {
    display: flex;
    align-items: center;
    gap: 3px;
}

.kt-pagination-links button {
    padding: 2px 4px;
    font-size: 10px;
    border: 1px solid #ccc;
    background: #fff;
    border-radius: 2px;
    cursor: pointer;
    transition: all 0.2s ease;
}

       .kt-pagination-links button:hover {
           background: #f0f0f0;
           border-color: #999;
       }

     /* Debug Panel */
.kt-debug-section {
    background: #fff3cd;
    border: 1px solid #ffeaa7;
    border-radius: 3px;
    padding: 8px;
    margin: 10px 0;
}

.kt-debug-section h4 {
    color: #856404;
    margin: 0 0 5px 0;
    font-size: 12px;
}

.kt-test-button {
    background: #6c757d;
    border-color: #6c757d;
    color: white;
    margin-right: 5px;
    padding: 2px 6px;
    font-size: 10px;
}
       .kt-test-button:hover {
           background: #5a6268;
           border-color: #545b62;
           color: white;
       }

  .button-small {
    font-size: 9px;
    padding: 1px 3px;
    height: auto;
    line-height: 1.2;
}

    .kt-processing-status {
    margin: 8px 0;
    padding: 5px;
    background: #f8f9fa;
    border-left: 3px solid #0073aa;
    font-size: 11px;
}

.kt-success-message {
    background: #d4edda;
    border: 1px solid #c3e6cb;
    color: #155724;
    padding: 5px;
    border-radius: 3px;
    margin: 5px 0;
    font-size: 11px;
}

.kt-error-message {
    background: #f8d7da;
    border: 1px solid #f5c6cb;
    color: #721c24;
    padding: 5px;
    border-radius: 3px;
    margin: 5px 0;
    font-size: 11px;
}

      .kt-loading {
    position: relative;
    opacity: 0.6;
    pointer-events: none;
}

.kt-loading::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 15px;
    height: 15px;
    margin: -7px 0 0 -7px;
    border: 1px solid #f3f3f3;
    border-top: 1px solid #0073aa;
    border-radius: 50%;
    animation: spin 1s linear infinite;
}

       @keyframes spin {
           0% { transform: rotate(0deg); }
           100% { transform: rotate(360deg); }
       }
       </style>
       <?php
   }
});

// Fixed JavaScript loading with proper jQuery dependency
add_action('admin_footer', function() {
   if (isset($_GET['page']) && $_GET['page'] === 'kt-cigar-matcher') {
       ?>
       <script type="text/javascript">
       jQuery(document).ready(function($) {
           'use strict';
           
           console.log('jQuery loaded successfully, version:', $.fn.jquery);

           // Generate detailed match analysis HTML
           function buildDetailedAnalysisHtml(data) {
              var html = '<div style="font-size:10px;line-height:1.2;">';

// Header
html += '<div style="background:#e3f2fd;padding:3px;margin-bottom:5px;border-radius:3px;">';
html += '<strong>🔍 Detailed Match Analysis</strong>';
html += '</div>';

// Product Summary
html += '<div style="display:grid;grid-template-columns:1fr 1fr;gap:5px;margin-bottom:8px;">';
               
              // Supplier Summary
html += '<div style="background:#fff3cd;padding:4px;border-radius:3px;">';
html += '<strong>📦 Supplier Product</strong><br>';
html += '<small>Keywords: ' + data.supplier.keyword_count + '</small><br>';
html += '<small>Brand: ' + data.supplier.brand + '</small><br>';
html += '<small>Dimensions: ' + data.supplier.ring + ' x ' + data.supplier.length + '</small>';
html += '</div>';

// Master Summary  
html += '<div style="background:#d4edda;padding:4px;border-radius:3px;">';
html += '<strong>🎯 Master Product</strong><br>';
html += '<small>Keywords: ' + data.master.keyword_count + '</small><br>';
html += '<small>Brand: ' + data.master.brand + '</small><br>';
html += '<small>Dimensions: ' + data.master.ring + ' x ' + data.master.length + '</small>';
html += '</div>';
html += '</div>';  // Close the grid container
               
              // Keyword Comparison Table
html += '<div style="margin-bottom:8px;">';
html += '<strong>🔗 Keyword Comparison:</strong>';
html += '<table style="width:100%;border-collapse:collapse;margin-top:3px;font-size:9px;">';
html += '<tr style="background:#f8f9fa;">';
html += '<th style="border:1px solid #ddd;padding:2px;text-align:left;">Type</th>';
html += '<th style="border:1px solid #ddd;padding:2px;text-align:left;">Supplier</th>';
html += '<th style="border:1px solid #ddd;padding:2px;text-align:left;">Master</th>';
html += '<th style="border:1px solid #ddd;padding:2px;text-align:center;">Match</th>';
html += '</tr>';
               
               // Add rows for each keyword type
               if (data.comparison) {
                   for (var type in data.comparison) {
                       var comp = data.comparison[type];
                       var statusColor = getComparisonColor(comp.match_status);
                       var statusText = getComparisonText(comp.match_status);
                       
                       html += '<tr>';
                   html += '<td style="border:1px solid #ddd;padding:2px;font-weight:bold;">' + type + '</td>';
                      html += '<td style="border:1px solid #ddd;padding:2px;">' + (comp.supplier && comp.supplier.length > 0 ? comp.supplier.join(', ') : '-') + '</td>';
                       html += '<td style="border:1px solid #ddd;padding:2px;">' + (comp.master && comp.master.length > 0 ? comp.master.join(', ') : '-') + '</td>';
                      html += '<td style="border:1px solid #ddd;padding:2px;text-align:center;color:' + statusColor + ';">' + statusText + '</td>';
                       html += '</tr>';
                   }
               }
               
               html += '</table>';
               html += '</div>';
               
              // Match Result
if (data.match_result) {
    html += '<div style="background:#f8f9fa;padding:4px;border-radius:3px;margin-bottom:5px;">';
    html += '<strong>🎯 Match Result:</strong><br>';
    html += 'Score: <span style="color:' + getScoreColor(data.match_result.score / 100) + ';">' + Math.round(data.match_result.score) + '%</span><br>';
    html += 'Method: ' + (data.match_result.method || 'Unknown') + '<br>';
    if (data.match_result.match_details) {
        html += 'Matching Types: ' + (data.match_result.match_details.matching_keyword_types || []).join(', ');
    }
    html += '</div>';
}
               
              // Raw Keywords (Expandable)
html += '<div style="margin-top:5px;">';
var randomId = Math.floor(Math.random() * 10000);
html += '<button onclick="toggleRawKeywords(' + randomId + ')" class="button" style="font-size:9px;padding:2px 4px;">Show Raw Keywords</button>';
html += '<div id="raw-keywords-' + randomId + '" style="display:none;margin-top:3px;background:#f5f5f5;padding:4px;border-radius:3px;max-height:80px;overflow-y:auto;">';
               
               // SAFE keyword handling
               var supplierKeywords = 'No keywords';
               var masterKeywords = 'No keywords';
               
               if (data.supplier && data.supplier.raw_keywords) {
                   if (Array.isArray(data.supplier.raw_keywords)) {
                       supplierKeywords = data.supplier.raw_keywords.join(', ');
                   } else {
                       supplierKeywords = String(data.supplier.raw_keywords);
                   }
               }
               
               if (data.master && data.master.raw_keywords) {
                   if (Array.isArray(data.master.raw_keywords)) {
                       masterKeywords = data.master.raw_keywords.join(', ');
                   } else {
                       masterKeywords = String(data.master.raw_keywords);
                   }
               }
               
              html += '<strong>Supplier:</strong> ' + supplierKeywords + '<br>';
html += '<strong>Master:</strong> ' + masterKeywords;
html += '</div>';
html += '</div>';

html += '</div>';
return html;
           }
           
           function getComparisonColor(status) {
               switch(status) {
                   case 'exact_match': return '#28a745';
                   case 'fuzzy_match': return '#17a2b8';
                   case 'numeric_match': return '#28a745';
                   case 'no_match': return '#dc3545';
                   case 'supplier_missing': return '#ffc107';
                   case 'master_missing': return '#6c757d';
                   case 'both_empty': return '#6c757d';
                   default: return '#6c757d';
               }
           }

           function getComparisonText(status) {
               switch(status) {
                   case 'exact_match': return '✅ Exact';
                   case 'fuzzy_match': return '🎯 Similar';
                   case 'numeric_match': return '📏 Close';
                   case 'no_match': return '❌ No Match';
                   case 'supplier_missing': return '⚠️ S Missing';
                   case 'master_missing': return '⚠️ M Missing';
                   case 'both_empty': return '⚫ Both Empty';
                   default: return '❓ Unknown';
               }
           }

           window.toggleRawKeywords = function(id) {
               $("#raw-keywords-" + id).toggle();
           };

           // Get color based on score
           function getScoreColor(score) {
               if (score >= 0.7) return '#28a745';
               if (score >= 0.5) return '#ffc107';
               return '#dc3545';
           }

           // Get detailed score breakdown
           function getScoreBreakdown(details) {
               var breakdown = '';
               
               if (details.brand_score) {
                   breakdown += '• Brand: ' + Math.round(details.brand_score * 100) + '% (weight: 25%)<br>';
               }
               if (details.vitola_score) {
                   breakdown += '• Vitola: ' + Math.round(details.vitola_score * 100) + '% (weight: 20%)<br>';
               }
               if (details.ring_score) {
                   breakdown += '• Ring Gauge: ' + Math.round(details.ring_score * 100) + '% (weight: 15%)<br>';
               }
               if (details.length_score) {
                   breakdown += '• Length: ' + Math.round(details.length_score * 100) + '% (weight: 10%)<br>';
               }
               if (details.series_score) {
                   breakdown += '• Series: ' + Math.round(details.series_score * 100) + '% (weight: 15%)<br>';
               }
               
               return breakdown || 'No detailed breakdown available';
           }

           // Get match recommendation
           function getMatchRecommendation(score) {
               if (score >= 85) {
                   return '✅ Excellent match - Very confident recommendation';
               } else if (score >= 70) {
                   return '👍 Good match - Recommended with review';
               } else if (score >= 50) {
                   return '⚠️ Possible match - Manual verification recommended';
               } else {
                   return '❌ Poor match - Consider creating new product or manual search';
               }
           }

           // Make functions globally available
           if (typeof window.buildDetailedAnalysisHtml === 'undefined') {
               window.buildDetailedAnalysisHtml = buildDetailedAnalysisHtml;
               window.getComparisonColor = getComparisonColor;
               window.getComparisonText = getComparisonText;
               window.getScoreColor = getScoreColor;
           }
           
  // Define global functions first (before document ready)
function closeMappingDetailsModal() {
    var modal = document.querySelector('.kt-mapping-details-modal');
    if (modal) modal.remove();
}

function smartReload() {
    window.location.reload();
}

function closeDetailedAnalysisModal() {
    var modal = document.querySelector('.kt-detailed-analysis-modal');
    if (modal) {
        modal.remove();
    }
}

// Make functions globally available
window.closeMappingDetailsModal = closeMappingDetailsModal;
window.smartReload = smartReload;
window.closeDetailedAnalysisModal = closeDetailedAnalysisModal;
           
           window.showDetailedAnalysis = function(supplierId, masterId) {
               // Show loading
               var analysisDiv = $("#match-analysis-loading");
               if (analysisDiv.length === 0) {
                   analysisDiv = $('<div id="match-analysis-loading" style="position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:white;padding:20px;border:2px solid #0073aa;border-radius:6px;z-index:10000;">🔄 Analyzing match details...</div>');
                   $("body").append(analysisDiv);
               }
               
               // Fetch detailed analysis
               $.ajax({
                   url: window.ktCigarAjax.ajax_url,
                   type: "POST",
                   data: {
                       action: "kt_analyze_single_match",
                       nonce: window.ktCigarAjax.nonce,
                       supplier_id: supplierId,
                       master_id: masterId
                   },
                   success: function(response) {
                       $("#match-analysis-loading").remove();
                       
                       if (response.success) {
                           var data = response.data;
                           var html = window.buildDetailedAnalysisHtml(data);                           
                          var modal = '<div class="kt-detailed-analysis-modal" style="position:fixed;bottom:0;left:0;width:100%;height:50vh;background:rgba(0,0,0,0.8);z-index:10001;overflow:auto;">' +
    '<div style="position:relative;margin:0;background:white;padding:5px;border-radius:4px 4px 0 0;max-width:100%;height:100%;overflow:auto;">' +
    '<button onclick="closeDetailedAnalysisModal()" style="position:absolute;top:2px;right:8px;background:none;border:none;font-size:16px;cursor:pointer;">&times;</button>' +
    '<h3 style="margin:0 0 5px;font-size:14px;">🔍 Detailed Match Analysis</h3>' +
    html +
    '<div style="text-align:center;margin-top:5px;padding:3px;">' +
    '<button onclick="closeDetailedAnalysisModal()" class="button button-primary" style="padding:3px 8px;font-size:11px;">Close Analysis</button>' +
    '</div>' +
    '</div></div>';
                           
                           $('body').append(modal);
                       } else {
                           alert("Analysis failed: " + response.data);
                       }
                   },
                   error: function() {
                       $("#match-analysis-loading").remove();
                       alert("Analysis request failed");
                   }
               });
           };

           window.closeDetailedAnalysisModal = function() {
               var modal = document.querySelector('.kt-detailed-analysis-modal');
               if (modal) {
                   modal.remove();
               }
           };
           
           // Wait for document ready
           $(document).ready(function() {
               console.log('Document ready - initializing KT Cigar Matcher');
               
               // Initialize global variables
               window.ktCigarAdmin = window.ktCigarAdmin || {};
               
               // Toggle keywords display
               window.toggleKeywords = function(productId) {
                   var keywordsDiv = $("#keywords-" + productId);
                   var button = keywordsDiv.siblings().find("button");
                   
                   if (keywordsDiv.is(":visible")) {
                       keywordsDiv.hide();
                       button.text("View");
                   } else {
                       keywordsDiv.show();
                       button.text("Hide");
                   }
               };

               // Toggle supplier keywords display
               window.toggleSupplierKeywords = function(productId) {
                   var keywordsDiv = $("#supplier-keywords-" + productId);
                   var button = keywordsDiv.siblings().find("button");
                   
                   if (keywordsDiv.is(":visible")) {
                       keywordsDiv.hide();
                       button.text("View");
                   } else {
                       keywordsDiv.show();
                       button.text("Hide");
                   }
               };

               // Search supplier products
               window.searchSupplierProducts = function() {
                   var search = $("#supplier-search").val();
                   var batch = $("#supplier-batch-filter").val();
                   var brand = $("#supplier-brand-filter").val();
                   var status = $("#supplier-status-filter").val();
                   var currentUrl = new URL(window.location);
                   currentUrl.searchParams.set('supplier_search', search);
                   currentUrl.searchParams.set('supplier_batch', batch);
                   currentUrl.searchParams.set('supplier_brand', brand);
                   currentUrl.searchParams.set('supplier_status', status);
                   currentUrl.searchParams.set('supplier_page', '1');
                   window.location.href = currentUrl.toString();
               };

               // Clear supplier filters
               window.clearSupplierFilters = function() {
                   var currentUrl = new URL(window.location);
                   currentUrl.searchParams.delete('supplier_search');
                   currentUrl.searchParams.delete('supplier_batch');
                   currentUrl.searchParams.delete('supplier_brand');
                   currentUrl.searchParams.delete('supplier_status');
                   currentUrl.searchParams.delete('supplier_page');
                   window.location.href = currentUrl.toString();
               };

               // Supplier pagination functions
               window.goToSupplierPage = function(page) {
                   var currentUrl = new URL(window.location);
                   currentUrl.searchParams.set('supplier_page', page);
                   window.location.href = currentUrl.toString();
               };

               window.changeSupplierPerPage = function(perPage) {
                   var currentUrl = new URL(window.location);
                   currentUrl.searchParams.set('supplier_per_page', perPage);
                   currentUrl.searchParams.set('supplier_page', '1');
                   window.location.href = currentUrl.toString();
               };

               // View supplier details
               window.viewSupplierDetails = function(productId) {
                   var keywordsDiv = $("#supplier-keywords-" + productId);
                   var button = $("button[onclick='viewSupplierDetails(" + productId + ")']");
                   
                   if (keywordsDiv.is(":visible")) {
                       keywordsDiv.slideUp(200);
                       button.text("Details");
                   } else {
                       keywordsDiv.slideDown(200);
                       button.text("Hide");
                   }
               };

               // Delete supplier product
               window.deleteSupplierProduct = function(productId) {
                   if (!confirm("Are you sure you want to delete this supplier product?")) {
                       return;
                   }
                   
                   $.ajax({
                       url: window.ktCigarAjax.ajax_url,
                       type: "POST",
                       data: {
                           action: "kt_delete_supplier_product",
                           nonce: window.ktCigarAjax.nonce,
                           product_id: productId
                       },
                       success: function(response) {
                           if (response.success) {
                               alert("Supplier product deleted successfully");
                               window.smartReload();
                           } else {
                               alert("Failed to delete product: " + response.data);
                           }
                       },
                       error: function() {
                           alert("Delete request failed");
                       }
                   });
               };

               // Tab functionality
               console.log("Setting up tab click handlers...");
               $(".nav-tab").on("click", function(e) {
                   e.preventDefault();
                   console.log("Tab clicked:", $(this).data("tab"));
                   
                   var targetTab = $(this).data("tab");
                   
                   // Save the active tab to localStorage
                   if (typeof Storage !== "undefined") {
                       localStorage.setItem('kt_active_tab', targetTab);
                   }
                   
                   // Update nav tabs
                   $(".nav-tab").removeClass("nav-tab-active");
                   $(this).addClass("nav-tab-active");
                   
                   // Hide all tab contents
                   $(".tab-content").hide().removeClass("active");
                   
                   // Show the target tab
                   $("#" + targetTab + "-tab").show().addClass("active");
                   
                   // Load tab-specific data
                   if (targetTab === "mapping") {
                       console.log("Loading mapping data...");
                   } else if (targetTab === "products") {
                       console.log("Refreshing processing stats...");
                   }
               });

               // Process all master products
               window.processAllMasterProducts = function() {
                   if (!confirm("This will process keyword extraction for all unprocessed master products. Continue?")) {
                       return;
                   }
                   
                   $("#processing-progress").show();
                   $("#processing-status").text("Processing master product keywords...");
                   $("#process-all-btn").prop("disabled", true);
                   
                   var processedCount = 0;
                   
                   function processBatch() {
                       $.ajax({
                           url: window.ktCigarAjax.ajax_url,
                           type: "POST",
                           data: {
                               action: "kt_process_master_products",
                               nonce: window.ktCigarAjax.nonce,
                               batch_size: 100
                           },
                           timeout: 60000,
                           success: function(response) {
                               if (response.success) {
                                   processedCount += response.data.processed;
                                   $("#processing-status").text("Processed: " + processedCount + " products");
                                   
                                   // Update stats display
                                   if (response.data.stats) {
                                       updateProcessingStats(response.data.stats);
                                   }
                                   
                                   // Update progress bar
                                   var progress = Math.round((response.data.stats.processed / response.data.stats.total) * 100);
                                   $(".progress-fill").css("width", progress + "%");
                                   
                                   // Continue if more to process
                                   if (response.data.processed > 0 && response.data.stats.unprocessed > 0) {
                                       setTimeout(processBatch, 1000);
                                   } else {
                                       // Processing complete
                                       $("#processing-progress").hide();
                                       $("#process-all-btn").prop("disabled", false);
                                       alert("Processing complete! " + processedCount + " products processed.");
                                       window.smartReload();
                                   }
                               } else {
                                   $("#processing-progress").hide();
                                   $("#process-all-btn").prop("disabled", false);
                                   alert("Processing failed: " + response.data);
                               }
                           },
                           error: function() {
                               $("#processing-progress").hide();
                               $("#process-all-btn").prop("disabled", false);
                               alert("Processing request failed");
                           }
                       });
                   }
                   
                   processBatch();
               };

               window.clearAndReprocessAll = function() {
                   if (!confirm("This will clear ALL existing keywords and reprocess all master products. Continue?")) {
                       return;
                   }
                   
                   $("#processing-progress").show();
                   $("#processing-status").text("Starting keyword processing...");
                   
                   $("button[onclick='clearAndReprocessAll()']").prop("disabled", true).text("Processing...");
                   
                   processStep(1);
               };

               function processStep(step) {
                   $.ajax({
                       url: window.ktCigarAjax.ajax_url,
                       type: "POST",
                       data: {
                           action: "kt_clear_and_reprocess_all",
                           nonce: window.ktCigarAjax.nonce,
                           step: step
                       },
                       timeout: 60000,
                       success: function(response) {
                           if (response.success) {
                               var data = response.data;
                               
                               $("#processing-status").html(
                                   "Step " + data.step + ": " + data.message + "<br>" +
                                   "Total: " + (data.stats.total || 0) + " | " +
                                   "Processed: " + (data.stats.processed || 0) + " | " +
                                   "Remaining: " + (data.stats.unprocessed || 0)
                               );
                               
                               // Check for completion OR continuation
                               if (data.complete || data.next_step === 0) {
                                   $("#processing-progress").hide();
                                   alert("Processing complete!");
                                   window.smartReload();
                               } else if (data.next_step > 0 && data.stats && data.stats.unprocessed > 0) {
                                   setTimeout(function() {
                                       processStep(data.next_step);
                                   }, 3000);
                               } else {
                                   $("#processing-progress").hide();
                                   alert("Processing completed (no more products to process)");
                                   window.smartReload();
                               }
                           } else {
                               $("#processing-progress").hide();
                               alert("Processing failed: " + (response.data || "Unknown error"));
                               $("button[onclick='clearAndReprocessAll()']").prop("disabled", false).text("Clear & Reprocess All Keywords");
                           }
                       },
                       error: function(xhr, status, error) {
                           $("#processing-progress").hide();
                           alert("AJAX error: " + status + " - " + error);
                           $("button[onclick='clearAndReprocessAll()']").prop("disabled", false).text("Clear & Reprocess All Keywords");
                       }
                   });
               }

               // Process single master product
               window.processSingleMaster = function(productId) {
                   var button = $("button[onclick='processSingleMaster(" + productId + ")']");
                   var originalText = button.text();
                   button.prop("disabled", true).text("Processing...");
                   
                   $.ajax({
                       url: window.ktCigarAjax.ajax_url,
                       type: "POST",
                       data: {
                           action: "kt_process_single_master",
                           nonce: window.ktCigarAjax.nonce,
                           product_id: productId
                       },
                       success: function(response) {
                           if (response.success) {
                               alert("Product keywords processed successfully");
                               window.smartReload();
                           } else {
                               alert("Failed to process keywords: " + response.data);
                               button.prop("disabled", false).text(originalText);
                           }
                       },
                       error: function() {
                           alert("Processing request failed");
                           button.prop("disabled", false).text(originalText);
                       }
                   });
               };

               // Refresh processing stats
               window.refreshProcessingStats = function() {
                   $.ajax({
                       url: window.ktCigarAjax.ajax_url,
                       type: "POST",
                       data: {
                           action: "kt_get_processing_stats",
                           nonce: window.ktCigarAjax.nonce
                       },
                       success: function(response) {
                           if (response.success) {
                               updateProcessingStats(response.data);
                           }
                       }
                   });
               };

               function updateProcessingStats(stats) {
                   var statsText = "Total: " + stats.total + " | " +
                                  "Processed: " + stats.processed + " | " +
                                  "Unprocessed: " + stats.unprocessed + " | " +
                                  "Errors: " + stats.errors;
                   $("#processing-stats").text(statsText);
                   
                   // Update button text
                   if (stats.unprocessed > 0) {
                       $("#process-all-btn").text("Process Keywords (" + stats.unprocessed + " pending)").show();
                   } else {
                       $("#process-all-btn").hide();
                   }
               }

               // Auto-matching functionality
               window.runIntelligentMatching = function() {
                   if (!confirm("Run intelligent auto-matching for unmapped supplier products?")) {
                       return;
                   }
                   
                   var button = $(".kt-auto-match-btn");
                   button.prop("disabled", true).text("🧠 Running Intelligent Auto-Matching...");
                   
                   $.ajax({
                       url: window.ktCigarAjax.ajax_url,
                       type: "POST",
                       data: {
                           action: "kt_run_auto_matching",
                           nonce: window.ktCigarAjax.nonce
                       },
                       success: function(response) {
                           if (response.success) {
                               alert("Intelligent auto-matching complete: " + response.data.message);
                               if (typeof refreshMappingStats === 'function') {
                                   refreshMappingStats();
                               }
                           } else {
                               alert("Auto-matching failed: " + response.data);
                           }
                           button.prop("disabled", false).text("🧠 Run Intelligent Auto-Matching");
                       },
                       error: function() {
                           alert("Auto-matching request failed");
                           button.prop("disabled", false).text("🧠 Run Intelligent Auto-Matching");
                       }
                   });
               };

               // Enhanced matching with detailed logging
               window.runIntelligentMatchingWithLogging = function() {
                   if (!confirm("Run intelligent auto-matching with detailed logging?")) {
                       return;
                   }
                   
                   var button = $(".kt-auto-match-btn");
                   button.prop("disabled", true).text("🧠 Running Intelligent Matching...");
                   
                   // Create log window
                   var logWindow = $('<div id="matching-log-window" style="position:fixed;top:10%;right:20px;width:400px;height:70%;background:white;border:2px solid #0073aa;border-radius:8px;z-index:10000;overflow:hidden;display:flex;flex-direction:column;">' +
                       '<div style="background:#0073aa;color:white;padding:10px;font-weight:bold;display:flex;justify-content:space-between;">' +
                       '<span>🔍 Matching Analysis Log</span>' +
                       '<button onclick="$(\'#matching-log-window\').remove()" style="background:none;border:none;color:white;cursor:pointer;">×</button>' +
                       '</div>' +
                       '<div id="matching-log-content" style="flex:1;overflow-y:auto;padding:10px;font-family:monospace;font-size:11px;line-height:1.4;"></div>' +
                       '<div style="padding:10px;border-top:1px solid #ddd;background:#f8f9fa;">' +
                       '<button onclick="downloadMatchingLog()" class="button">💾 Download Log</button>' +
                       '<button onclick="clearMatchingLog()" class="button">🗑️ Clear</button>' +
                       '</div>' +
                       '</div>');
                   
                   $('body').append(logWindow);
                   
                   // Start matching with logging
                   $.ajax({
                       url: window.ktCigarAjax.ajax_url,
                       type: "POST",
                       data: {
                           action: "kt_run_auto_matching_with_logging",
                           nonce: window.ktCigarAjax.nonce
                       },
                       success: function(response) {
                           if (response.success) {
                               logMatchingResult("✅ Matching Complete: " + response.data.message);
                               alert("Intelligent auto-matching complete with detailed logging!");
                           } else {
                               logMatchingResult("❌ Matching Failed: " + response.data);
                               alert("Auto-matching failed: " + response.data);
                           }
                           button.prop("disabled", false).text("🧠 Run Intelligent Auto-Matching");
                       },
                       error: function() {
                           logMatchingResult("💥 Request Failed: Network or server error");
                           alert("Auto-matching request failed");
                           button.prop("disabled", false).text("🧠 Run Intelligent Auto-Matching");
                       }
                   });
               };

              // Log matching events
             window.logMatchingResult = function(message) {
                 var timestamp = new Date().toLocaleTimeString();
                 var logContent = $("#matching-log-content");
                 if (logContent.length > 0) {
                     logContent.append('<div>[' + timestamp + '] ' + message + '</div>');
                     logContent.scrollTop(logContent[0].scrollHeight);
                 }
             };

             // Download matching log
             window.downloadMatchingLog = function() {
                 var logContent = $("#matching-log-content").text();
                 var blob = new Blob([logContent], { type: 'text/plain' });
                 var url = window.URL.createObjectURL(blob);
                 var a = document.createElement('a');
                 a.href = url;
                 a.download = 'cigar-matching-log-' + new Date().toISOString().slice(0,10) + '.txt';
                 a.click();
                 window.URL.revokeObjectURL(url);
             };

             // Clear matching log
             window.clearMatchingLog = function() {
                 $("#matching-log-content").empty();
             };

             // Refresh mapping stats
             window.refreshMappingStats = function() {
                 $.ajax({
                     url: window.ktCigarAjax.ajax_url,
                     type: "POST",
                     data: {
                         action: "kt_get_mapping_stats", 
                         nonce: window.ktCigarAjax.nonce
                     },
                     success: function(response) {
                         if (response.success && response.data) {
                             console.log("Mapping stats refreshed:", response.data);
                         }
                     },
                     error: function() {
                         console.log("Failed to refresh mapping stats");
                     }
                 });
             };

             // Enhanced match analysis with detailed comparison
             window.showMatchAnalysis = function(index, supplierId, masterId) {
                 var analysisDiv = $("#match-analysis-" + index);
                 var button = $("button[onclick*='showMatchAnalysis(" + index + ")']");
                 
                 if (analysisDiv.is(":visible")) {
                     analysisDiv.slideUp(200);
                     button.text("🔍 Why?");
                     return;
                 }
                 
                 // Show loading
                 analysisDiv.html('<div style="text-align:center;padding:10px;">🔄 Analyzing match details...</div>').slideDown(200);
                 button.text("🔄 Loading...");
                 
                 // Fetch detailed analysis
                 $.ajax({
                     url: window.ktCigarAjax.ajax_url,
                     type: "POST",
                     data: {
                         action: "kt_analyze_single_match",
                         nonce: window.ktCigarAjax.nonce,
                         supplier_id: supplierId,
                         master_id: masterId
                     },
                     success: function(response) {
                         if (response.success) {
                             var data = response.data;
                             var html = buildDetailedAnalysisHtml(data);
                             analysisDiv.html(html);
                             button.text("🔍 Hide");
                         } else {
                             analysisDiv.html('<div style="color:red;">Analysis failed: ' + response.data + '</div>');
                             button.text("🔍 Error");
                         }
                     },
                     error: function() {
                         analysisDiv.html('<div style="color:red;">Network error during analysis</div>');
                         button.text("🔍 Error");
                     }
                 });
             };

             // Generate detailed match analysis HTML
             function getMatchAnalysisHtml(matchDetails, supplier, masterProduct) {
                 var html = '';
                 
                 // Brand Analysis
                 html += '<div style="margin-bottom:8px;">';
                 html += '<strong>Brand Match:</strong> ';
                 if (matchDetails.brand_score) {
                     html += '<span style="color:' + getScoreColor(matchDetails.brand_score) + ';">' + Math.round(matchDetails.brand_score * 100) + '%</span>';
                     html += ' (' + (supplier.supplier_brand || 'N/A') + ' vs ' + (masterProduct.brand || 'N/A') + ')';
                 } else {
                     html += '<span style="color:#dc3545;">No brand comparison available</span>';
                 }
                 html += '</div>';
                 
                 // Vitola Analysis
                 if (matchDetails.vitola_score) {
                     html += '<div style="margin-bottom:8px;">';
                     html += '<strong>Vitola Match:</strong> ';
                     html += '<span style="color:' + getScoreColor(matchDetails.vitola_score) + ';">' + Math.round(matchDetails.vitola_score * 100) + '%</span>';
                     html += '</div>';
                 }
                 
                 // Dimensions Analysis
                 if (matchDetails.ring_score || matchDetails.length_score) {
                     html += '<div style="margin-bottom:8px;">';
                     html += '<strong>Dimensions:</strong> ';
                     if (matchDetails.ring_score) {
                         html += 'Ring: <span style="color:' + getScoreColor(matchDetails.ring_score) + ';">' + Math.round(matchDetails.ring_score * 100) + '%</span> ';
                     }
                     if (matchDetails.length_score) {
                         html += 'Length: <span style="color:' + getScoreColor(matchDetails.length_score) + ';">' + Math.round(matchDetails.length_score * 100) + '%</span>';
                     }
                     html += '</div>';
                 }
                 
                 // Matching Keywords
                 if (matchDetails.matching_keyword_types && matchDetails.matching_keyword_types.length > 0) {
                     html += '<div style="margin-bottom:8px;">';
                     html += '<strong>Matching Keywords:</strong> ' + matchDetails.matching_keyword_types.join(', ');
                     html += '</div>';
                 }
                 
                 // Reasons for Score
                 html += '<div style="margin-bottom:8px;">';
                 html += '<strong>Score Breakdown:</strong><br>';
                 html += getScoreBreakdown(matchDetails);
                 html += '</div>';
                 
                 // Recommendations
                 html += '<div style="color:#666;font-style:italic;">';
                 html += getMatchRecommendation(matchDetails.final_score || 0);
                 html += '</div>';
                 
                 return html;
             }

             // CSV Upload functionality
             $("#csv-upload-form").on("submit", function(e) {
                 e.preventDefault();
                 
                 var formData = new FormData(this);
                 formData.append("action", "kt_upload_supplier_csv");
                 formData.append("nonce", window.ktCigarAjax.nonce);
                 
                 $("#upload-progress").show();
                 $("#upload-results").hide();
                 
                 $.ajax({
                     url: window.ktCigarAjax.ajax_url,
                     type: "POST",
                     data: formData,
                     processData: false,
                     contentType: false,
                     success: function(response) {
                         $("#upload-progress").hide();
                         $("#upload-results").show();
                         
                         if (response.success) {
                             $("#upload-summary").html(
                                 '<div class="kt-success-message">' +
                                 '<strong>Upload Successful!</strong><br>' +
                                 'Batch: ' + response.data.batch_name + '<br>' +
                                 'Processed: ' + response.data.processed + ' products<br>' +
                                 'Errors: ' + response.data.errors + '<br>' +
                                 response.data.message +
                                 '</div>'
                             );
                             
                             // Reset form
                             $("#csv-upload-form")[0].reset();
                         } else {
                             $("#upload-summary").html(
                                 '<div class="kt-error-message">' +
                                 '<strong>Upload Failed:</strong><br>' +
                                 response.data +
                                 '</div>'
                             );
                         }
                     },
                     error: function() {
                         $("#upload-progress").hide();
                         $("#upload-results").show();
                         $("#upload-summary").html(
                             '<div class="kt-error-message">' +
                             '<strong>Upload request failed</strong>' +
                             '</div>'
                         );
                     }
                 });
             });

             // Master Products functionality
             window.searchMasterProducts = function() {
                 var search = $("#product-search").val();
                 var currentUrl = new URL(window.location);
                 currentUrl.searchParams.set('master_search', search);
                 currentUrl.searchParams.set('master_page', '1');
                 window.location.href = currentUrl.toString();
             };

             // Pagination functions
             window.goToMasterPage = function(page) {
                 var currentUrl = new URL(window.location);
                 currentUrl.searchParams.set('master_page', page);
                 window.location.href = currentUrl.toString();
             };

             window.changeMasterPerPage = function(perPage) {
                 var currentUrl = new URL(window.location);
                 currentUrl.searchParams.set('master_per_page', perPage);
                 currentUrl.searchParams.set('master_page', '1');
                 window.location.href = currentUrl.toString();
             };

             // Handle Enter key in search
             $("#product-search").on("keypress", function(e) {
                 if (e.which === 13) {
                     searchMasterProducts();
                 }
             });

             // Delete functions
             window.deleteMasterProduct = function(productId) {
                 if (!confirm("Are you sure you want to delete this master product? This will also delete all associated mappings.")) {
                     return;
                 }
                 
                 $.ajax({
                     url: window.ktCigarAjax.ajax_url,
                     type: "POST",
                     data: {
                         action: "kt_delete_master_product",
                         nonce: window.ktCigarAjax.nonce,
                         product_id: productId
                     },
                     success: function(response) {
                         if (response.success) {
                             alert("Master product deleted successfully");
                             window.smartReload();
                         } else {
                             alert("Failed to delete product: " + response.data);
                         }
                     },
                     error: function() {
                         alert("Delete request failed");
                     }
                 });
             };

             window.deleteBatch = function(batchId) {
                 if (!confirm("Are you sure you want to delete this entire supplier batch? This cannot be undone.")) {
                     return;
                 }
                 
                 // Disable the button during deletion
                 var deleteButton = $("button[onclick=\"deleteBatch('" + batchId + "')\"]");
                 deleteButton.prop('disabled', true).text('Deleting...');
                 
                 $.ajax({
                     url: window.ktCigarAjax.ajax_url,
                     type: "POST",
                     data: {
                         action: "kt_delete_supplier_batch",
                         nonce: window.ktCigarAjax.nonce,
                         batch_id: batchId
                     },
                     success: function(response) {
                         if (response.success) {
                             alert("Supplier batch deleted successfully: " + response.data.message);
                             window.smartReload();
                         } else {
                             alert("Failed to delete batch: " + response.data);
                             deleteButton.prop('disabled', false).text('Delete');
                         }
                     },
                     error: function(xhr, status, error) {
                         console.error('Delete batch error:', xhr, status, error);
                         alert("Delete request failed: " + (xhr.responseText || error));
                         deleteButton.prop('disabled', false).text('Delete');
                     }
                 });
             };

             // Modal functionality
             window.openProductModal = function() {
                 alert("Product modal functionality not yet implemented");
             };

             window.closeProductModal = function() {
                 $("#product-modal").hide();
             };

             // Edit master product
             window.editMasterProduct = function(productId) {
                 $.ajax({
                     url: window.ktCigarAjax.ajax_url,
                     type: "POST",
                     data: {
                         action: "kt_get_master_product",
                         nonce: window.ktCigarAjax.nonce,
                         product_id: productId
                     },
                     success: function(response) {
                         if (response.success) {
                             showEditMasterModal(response.data);
                         } else {
                             alert("Failed to load product data: " + response.data);
                         }
                     },
                     error: function() {
                         alert("Failed to load product data");
                     }
                 });
             };

           window.showEditMasterModal = function(product) {
   var modalHtml = '<div class="kt-edit-master-modal" style="position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.7);z-index:9999;overflow:auto;">' +
       '<div style="position:relative;margin:20px auto;background:white;padding:15px;border-radius:6px;max-width:1200px;max-height:90vh;overflow:auto;">' +
       '<button onclick="closeEditModal()" style="position:absolute;top:8px;right:12px;background:none;border:none;font-size:20px;cursor:pointer;">&times;</button>' +
       '<h2 style="margin:0 0 15px;">Edit Master Product #' + product.id + '</h2>' +
       
       '<form id="edit-master-form" style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:15px;">' +
       '<input type="hidden" id="edit-product-id" value="' + product.id + '">' +
       
       // Column 1 - Basic Info
       '<div>' +
       '<h4>🏷️ Basic Information</h4>' +
       '<p style="margin:0 0 8px;"><label><strong>Room ID:</strong><br>' +
       '<input type="number" id="edit-room-id" value="' + (product.room_id || '') + '" style="width:100%;padding:6px;border:1px solid #ddd;border-radius:3px;"></label></p>' +
       
       '<p style="margin:0 0 8px;"><label><strong>SKU:</strong><br>' +
       '<input type="text" id="edit-sku" value="' + (product.sku || '') + '" style="width:100%;padding:6px;border:1px solid #ddd;border-radius:3px;"></label></p>' +
       
       '<p style="margin:0 0 8px;"><label><strong>Product Title:</strong><br>' +
       '<textarea id="edit-title" style="width:100%;padding:6px;border:1px solid #ddd;border-radius:3px;" rows="3">' + (product.product_title || '') + '</textarea></label></p>' +
       
       '<p style="margin:0 0 8px;"><label><strong>Category:</strong><br>' +
       '<input type="text" id="edit-category" value="' + (product.product_category || '') + '" style="width:100%;padding:6px;border:1px solid #ddd;border-radius:3px;"></label></p>' +
       
       '<p style="margin:0 0 8px;"><label><strong>Product Type:</strong><br>' +
       '<select id="edit-type" style="width:100%;padding:6px;border:1px solid #ddd;border-radius:3px;">' +
       '<option value="cigar"' + (product.product_type === 'cigar' ? ' selected' : '') + '>Cigar</option>' +
       '<option value="accessory"' + (product.product_type === 'accessory' ? ' selected' : '') + '>Accessory</option>' +
       '<option value="other"' + (product.product_type === 'other' ? ' selected' : '') + '>Other</option>' +
       '</select></label></p>' +
       
       '<p style="margin:0 0 8px;"><label><strong>Brand:</strong><br>' +
       '<input type="text" id="edit-brand" value="' + (product.brand || '') + '" style="width:100%;padding:6px;border:1px solid #ddd;border-radius:3px;"></label></p>' +
       '</div>' +
       
       // Column 2 - Specs & Pricing
       '<div>' +
       '<h4>📏 Specifications & Pricing</h4>' +
       '<p style="margin:0 0 8px;"><label><strong>Ring Gauge (seat_row):</strong><br>' +
       '<input type="text" id="edit-ring" value="' + (product.seat_row || '') + '" style="width:100%;padding:6px;border:1px solid #ddd;border-radius:3px;"></label></p>' +
       
       '<p style="margin:0 0 8px;"><label><strong>Length (seat_number):</strong><br>' +
       '<input type="text" id="edit-length" value="' + (product.seat_number || '') + '" style="width:100%;padding:6px;border:1px solid #ddd;border-radius:3px;"></label></p>' +
       
       '<p style="margin:0 0 8px;"><label><strong>Length (inches):</strong><br>' +
       '<input type="number" id="edit-length-inches" value="' + (product.length_inches || '') + '" step="0.1" style="width:100%;padding:6px;border:1px solid #ddd;border-radius:3px;"></label></p>' +
       
       '<p style="margin:0 0 8px;"><label><strong>Retail Price:</strong><br>' +
       '<input type="number" id="edit-price" value="' + (product.recommended_retail_price || '') + '" step="0.01" style="width:100%;padding:6px;border:1px solid #ddd;border-radius:3px;"></label></p>' +
       
       '<p style="margin:0 0 8px;"><label><strong>Price Sheet Name:</strong><br>' +
       '<input type="text" id="edit-price-sheet" value="' + (product.price_sheet_name || '') + '" style="width:100%;padding:6px;border:1px solid #ddd;border-radius:3px;"></label></p>' +
       
       '<p style="margin:0 0 8px;"><label><strong>Excel Sheet Name:</strong><br>' +
       '<input type="text" id="edit-excel-sheet" value="' + (product.excel_sheet_name || '') + '" style="width:100%;padding:6px;border:1px solid #ddd;border-radius:3px;"></label></p>' +
       '</div>' +
       
       // Column 3 - Additional Info
       '<div>' +
       '<h4>🎯 Additional Information</h4>' +
       '<p style="margin:0 0 8px;"><label><strong>Ticket Type:</strong><br>' +
       '<input type="text" id="edit-ticket-type" value="' + (product.ticket_type || '') + '" style="width:100%;padding:6px;border:1px solid #ddd;border-radius:3px;"></label></p>' +
       
       '<p style="margin:0 0 8px;"><label><strong>Seat Section:</strong><br>' +
       '<input type="text" id="edit-seat-section" value="' + (product.seat_section || '') + '" style="width:100%;padding:6px;border:1px solid #ddd;border-radius:3px;"></label></p>' +
       
       '<p style="margin:0 0 8px;"><label><strong>Remark:</strong><br>' +
       '<input type="text" id="edit-remark" value="' + (product.remark || '') + '" style="width:100%;padding:6px;border:1px solid #ddd;border-radius:3px;"></label></p>' +
       
       '<p style="margin:0 0 8px;"><label><strong>Featured:</strong><br>' +
       '<select id="edit-featured" style="width:100%;padding:6px;border:1px solid #ddd;border-radius:3px;">' +
       '<option value="0"' + (product.is_featured == 0 ? ' selected' : '') + '>No</option>' +
       '<option value="1"' + (product.is_featured == 1 ? ' selected' : '') + '>Yes</option>' +
       '</select></label></p>' +
       
       '<p style="margin:0 0 8px;"><label><strong>Main Photo URL:</strong><br>' +
       '<input type="url" id="edit-main-photo" value="' + (product.main_photo || '') + '" style="width:100%;padding:6px;border:1px solid #ddd;border-radius:3px;" placeholder="https://example.com/image.jpg"></label></p>' +
       
       '<p style="margin:0 0 8px;"><label><strong>Multiple Photos:</strong><br>' +
       '<textarea id="edit-multiple-photos" style="width:100%;padding:6px;border:1px solid #ddd;border-radius:3px;" rows="2" placeholder="URL1, URL2, URL3">' + (product.multiple_photos || '') + '</textarea></label></p>' +
       '</div>' +
       
       // Full-width description
       '<div style="grid-column:1/4;">' +
       '<h4>📝 Description</h4>' +
       '<p style="margin:0 0 8px;"><label><strong>Description (seats_reference):</strong><br>' +
       '<textarea id="edit-description" style="width:100%;padding:6px;border:1px solid #ddd;border-radius:3px;" rows="4">' + (product.seats_reference || '') + '</textarea></label></p>' +
       '</div>' +
       
       '</form>' +
       
       '<div style="text-align:center;margin-top:15px;padding-top:15px;border-top:1px solid #ddd;">' +
       '<button type="button" onclick="submitEditMaster()" class="button button-primary" style="margin-right:10px;">💾 Save Changes</button>' +
       '<button type="button" onclick="closeEditModal()" class="button">Cancel</button>' +
       '</div>' +
       
       '</div></div>';
   
   document.body.insertAdjacentHTML('beforeend', modalHtml);
};

             window.closeEditModal = function() {
                 var modal = document.querySelector('.kt-edit-master-modal');
                 if (modal) {
                     modal.remove();
                 }
             };

             window.submitEditMaster = function() {
   var formData = {
       action: "kt_save_master_product",
       nonce: window.ktCigarAjax.nonce,
       id: $("#edit-product-id").val(),
       room_id: $("#edit-room-id").val(),
       sku: $("#edit-sku").val(),
       product_title: $("#edit-title").val(),
       product_category: $("#edit-category").val(),
       product_type: $("#edit-type").val(),
       brand: $("#edit-brand").val(),
       main_photo: $("#edit-main-photo").val(),
       multiple_photos: $("#edit-multiple-photos").val(),
       recommended_retail_price: $("#edit-price").val(),
       price_sheet_name: $("#edit-price-sheet").val(),
       excel_sheet_name: $("#edit-excel-sheet").val(),
       ticket_type: $("#edit-ticket-type").val(),
       seats_reference: $("#edit-description").val(),
       seat_section: $("#edit-seat-section").val(),
       seat_row: $("#edit-ring").val(),
       seat_number: $("#edit-length").val(),
       remark: $("#edit-remark").val(),
       is_featured: $("#edit-featured").val(),
       length_inches: $("#edit-length-inches").val()
   };
   
   $(".kt-edit-master-modal .button-primary").prop("disabled", true).text("Saving...");
   
   $.ajax({
       url: window.ktCigarAjax.ajax_url,
       type: "POST",
       data: formData,
       success: function(response) {
           if (response.success) {
               alert("✅ Master product updated successfully!");
               $(".kt-edit-master-modal").remove();
               window.smartReload();
           } else {
               alert("❌ Failed to update: " + response.data);
               $(".kt-edit-master-modal .button-primary").prop("disabled", false).text("💾 Save Changes");
           }
       },
       error: function() {
           alert("❌ Update request failed");
           $(".kt-edit-master-modal .button-primary").prop("disabled", false).text("💾 Save Changes");
       }
   });
};

             // Enhanced view larger image with better modal
             window.viewLargerImage = function(imageUrl) {
                 $('.kt-image-modal').remove();
                 
                 var modal = $('<div class="kt-image-modal" style="position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.9);z-index:9999;display:flex;align-items:center;justify-content:center;cursor:pointer;">' +
                     '<div style="position:relative;max-width:95%;max-height:95%;text-align:center;">' +
                     '<img src="' + imageUrl + '" style="max-width:100%;max-height:100%;border-radius:8px;box-shadow:0 4px 20px rgba(0,0,0,0.5);">' +
                     '<button style="position:absolute;top:-10px;right:-10px;background:white;border:none;padding:8px 12px;cursor:pointer;border-radius:50%;font-size:18px;font-weight:bold;box-shadow:0 2px 10px rgba(0,0,0,0.3);">×</button>' +
                     '<div style="position:absolute;bottom:-30px;left:0;right:0;color:white;text-align:center;font-size:12px;">Click outside to close</div>' +
                     '</div></div>');
                 
                 modal.on('click', function(e) {
                     if (e.target === this) {
                         $(this).remove();
                     }
                 });
                 
                 modal.find('button').on('click', function(e) {
                     e.stopPropagation();
                     $(this).closest('.kt-image-modal').remove();
                 });
                 
                 $('body').append(modal);
             };

             // Calculate keyword quality
             window.calculateKeywordQuality = function(keywords) {
                 if (!keywords || keywords.length === 0) return 0;
                 
                 var hasTypes = {
                     'BRAND': false,
                     'VITOLA': false,
                     'RING': false,
                     'LENGTH': false
                 };
                 
                 keywords.forEach(function(keyword) {
                     var parts = keyword.split(':');
                     if (parts.length === 2) {
                         hasTypes[parts[0]] = true;
                     }
                 });
                 
                 var score = 0;
                 if (hasTypes.BRAND) score += 40;
                 if (hasTypes.VITOLA) score += 30;
                 if (hasTypes.RING || hasTypes.LENGTH) score += 30;
                 
                 return score;
             };

             // Debug function implementations
             window.testAutoMatching = function() {
                 console.log("Testing auto-matching system...");
                 
                 var debugResults = $("#debug-results");
                 if (debugResults.length === 0) {
                     debugResults = $('<div id="debug-results" style="margin-top: 10px; display: none; padding: 10px; border: 1px solid #ddd; border-radius: 4px; background: #f9f9f9;"></div>');
                     $(".kt-debug-section").append(debugResults);
                 }
                 
                 debugResults.html('<div class="kt-loading">Running auto-matching test...</div>').show();
                 
                 $.ajax({
                     url: window.ktCigarAjax.ajax_url,
                     type: "POST",
                     data: {
                         action: "kt_test_auto_matching",
                         nonce: window.ktCigarAjax.nonce
                     },
                     success: function(response) {
                         console.log("Auto-matching test result:", response);
                         
                         var resultHtml = "";
                         if (response.success) {
                             resultHtml = '<div class="kt-success-message">' +
                                 '<strong>✅ Auto-matching test successful!</strong><br>' +
                                 '<small>' +
                                 'Supplier: ' + response.data.supplier_title + '<br>' +
                                 'Best Match: ' + (response.data.best_match || "None") + '<br>' +
                                 'Score: ' + response.data.score + '%<br>' +
                                 'Total Matches: ' + response.data.total_matches + '<br>' +
                                 'Method: ' + (response.data.method || "N/A") +
                                 '</small>' +
                                 '</div>';
                         } else {
                             resultHtml = '<div class="kt-error-message">' +
                                 '<strong>❌ Auto-matching test failed:</strong><br>' +
                                 '<small>' + response.data + '</small>' +
                                 '</div>';
                         }
                         
                         $("#debug-results").html(resultHtml);
                     },
                     error: function(xhr, status, error) {
                         console.error("Auto-matching test failed:", xhr, status, error);
                         
                         var errorMsg = "Request failed";
                         if (xhr.responseJSON && xhr.responseJSON.data) {
                             errorMsg = xhr.responseJSON.data;
                         } else if (error) {
                             errorMsg = error;
                         }
                         
                         $("#debug-results").html('<div class="kt-error-message">' +
                             '<strong>❌ Test request failed:</strong><br>' +
                             '<small>' + errorMsg + '</small>' +
                             '</div>');
                     }
                 });
             };

             // Other debug functions
             window.runDiagnostics = function() {
                 var debugResults = $("#debug-results");
                 if (debugResults.length === 0) {
                    debugResults = $('<div id="debug-results" style="margin-top: 10px; display: none; padding: 10px; border: 1px solid #ddd; border-radius: 4px; background: #f9f9f9;"></div>');
                     $(".kt-debug-section").append(debugResults);
                 }
                 
                 debugResults.html('<div class="kt-loading">Running full diagnostics...</div>').show();
                 
                 $.ajax({
                     url: window.ktCigarAjax.ajax_url,
                     type: "POST",
                     data: {
                         action: "kt_run_diagnostics",
                         nonce: window.ktCigarAjax.nonce
                     },
                     success: function(response) {
                         if (response.success) {
                             debugResults.html('<div class="kt-success-message">' +
                                 '<strong>✅ Diagnostics completed</strong><br>' +
                                 '<small>Check debug logs for detailed results</small>' +
                                 '</div>');
                         } else {
                             debugResults.html('<div class="kt-error-message">' +
                                 '<strong>❌ Diagnostics failed:</strong><br>' +
                                 '<small>' + response.data + '</small>' +
                                 '</div>');
                         }
                     },
                     error: function() {
                         debugResults.html('<div class="kt-error-message">' +
                             '<strong>❌ Diagnostics request failed</strong>' +
                             '</div>');
                     }
                 });
             };

             window.checkDataFile = function() {
                 var debugResults = $("#debug-results");
                 if (debugResults.length === 0) {
                     debugResults = $('<div id="debug-results" style="margin-top: 10px; display: none; padding: 10px; border: 1px solid #ddd; border-radius: 4px; background: #f9f9f9;"></div>');
                     $(".kt-debug-section").append(debugResults);
                 }
                 
                 debugResults.html('<div class="kt-loading">Checking data file...</div>').show();
                 
                 $.ajax({
                     url: window.ktCigarAjax.ajax_url,
                     type: "POST",
                     data: {
                         action: "kt_check_data_file",
                         nonce: window.ktCigarAjax.nonce
                     },
                     success: function(response) {
                         if (response.success) {
                             var data = response.data;
                             debugResults.html('<div class="kt-success-message">' +
                                 '<strong>📁 Data File Status:</strong><br>' +
                                 '<small>' +
                                 'Loaded: ' + (data.loaded ? "✅ Yes" : "❌ No") + '<br>' +
                                 'Cuban Brands: ' + (data.cuban_brands || 0) + '<br>' +
                                 'Non-Cuban Brands: ' + (data.non_cuban_brands || 0) + '<br>' +
                                 'Vitola Mappings: ' + (data.vitola_mappings || 0) + '<br>' +
                                 'Special Editions: ' + (data.special_editions || 0) + '<br>' +
                                 'Packaging Types: ' + (data.packaging_types || 0) +
                                 '</small>' +
                                 '</div>');
                         } else {
                             debugResults.html('<div class="kt-error-message">' +
                                 '<strong>❌ Data file check failed:</strong><br>' +
                                 '<small>' + response.data + '</small>' +
                                 '</div>');
                         }
                     },
                     error: function() {
                         debugResults.html('<div class="kt-error-message">' +
                             '<strong>❌ Data file check request failed</strong>' +
                             '</div>');
                     }
                 });
             };

             window.testProductExtraction = function() {
                 var title = prompt("Enter a product title to test extraction:");
                 if (!title || title.trim() === "") {
                     alert("Please enter a valid product title");
                     return;
                 }
                 
                 var debugResults = $("#debug-results");
                 if (debugResults.length === 0) {
                     debugResults = $('<div id="debug-results" style="margin-top: 10px; display: none; padding: 10px; border: 1px solid #ddd; border-radius: 4px; background: #f9f9f9;"></div>');
                     $(".kt-debug-section").append(debugResults);
                 }
                 
                 debugResults.html('<div class="kt-loading">Testing product extraction...</div>').show();
                 
                 $.ajax({
                     url: window.ktCigarAjax.ajax_url,
                     type: "POST", 
                     data: {
                         action: "kt_test_extraction",
                         nonce: window.ktCigarAjax.nonce,
                         title: title,
                         brand: ""
                     },
                     success: function(response) {
                         if (response.success) {
                             var data = response.data;
                             debugResults.html(
                                 '<div class="kt-success-message">' +
                                 '<strong>✅ Extraction Test Results:</strong><br>' +
                                 '<small>' +
                                 '<strong>Title:</strong> ' + data.title + '<br>' +
                                 '<strong>Brand:</strong> ' + data.brand + '<br>' +
                                 '<strong>Vitola:</strong> ' + data.vitola + '<br>' +
                                 '<strong>Keywords:</strong> ' + data.keywords_count + ' found<br>' +
                                 '<strong>Year:</strong> ' + data.year + '<br>' +
                                 '<strong>Count:</strong> ' + data.count + '<br>' +
                                 '<strong>Packaging:</strong> ' + data.packaging + '<br>' +
                                 '<strong>All Keywords:</strong> ' + (data.keywords && data.keywords.length > 0 ? 
                                     data.keywords.slice(0, 10).join(", ") + 
                                     (data.keywords.length > 10 ? "... +" + (data.keywords.length - 10) + " more" : "") 
                                     : "None") + '<br>' +
                                 '<strong>Keyword Quality Score:</strong> ' + calculateKeywordQuality(data.keywords) + '%' +
                                 '</small>' +
                                 '</div>'
                             );
                         } else {
                             debugResults.html('<div class="kt-error-message">' +
                                 '<strong>❌ Extraction failed:</strong><br>' +
                                 '<small>' + response.data + '</small>' +
                                 '</div>');
                         }
                     },
                     error: function(xhr, status, error) {
                         console.error("Extraction test failed:", xhr, status, error);
                         debugResults.html('<div class="kt-error-message">' +
                             '<strong>❌ Extraction test request failed:</strong><br>' +
                             '<small>' + (xhr.responseText || error) + '</small>' +
                             '</div>');
                     }
                 });
             };

             window.viewDebugLogs = function() {
                 var debugResults = $("#debug-results");
                 if (debugResults.length === 0) {
                     debugResults = $('<div id="debug-results" style="margin-top: 10px; display: none; padding: 10px; border: 1px solid #ddd; border-radius: 4px; background: #f9f9f9;"></div>');
                     $(".kt-debug-section").append(debugResults);
                 }
                 
                 debugResults.html('<div class="kt-loading">Loading debug stats...</div>').show();
                 
                 $.ajax({
                     url: window.ktCigarAjax.ajax_url,
                     type: "POST",
                     data: {
                         action: "kt_get_debug_stats",
                         nonce: window.ktCigarAjax.nonce
                     },
                     success: function(response) {
                         if (response.success) {
                             var stats = response.data;
                             var html = '<div class="kt-success-message">' +
                                 '<strong>📋 Debug Log Statistics:</strong><br>' +
                                 '<small>' +
                                 'File exists: ' + (stats.file_exists ? "✅ Yes" : "❌ No") + '<br>';
                             
                             if (stats.file_exists) {
                                 html += 'File size: ' + stats.file_size_readable + '<br>' +
                                        'Total lines: ' + stats.total_lines + '<br>' +
                                        'Recent entries: ' + stats.recent_entries + '<br>' +
                                        'Last modified: ' + stats.last_modified + '<br>';
                             }
                             
                             html += '</small>' +
                                    '<button type="button" class="button" onclick="clearDebugLogs()" style="margin-top: 10px;">Clear Logs</button>' +
                                    '</div>';
                             
                             debugResults.html(html);
                         } else {
                             debugResults.html('<div class="kt-error-message">' +
                                 '<strong>❌ Failed to get debug stats:</strong><br>' +
                                 '<small>' + response.data + '</small>' +
                                 '</div>');
                         }
                     },
                     error: function() {
                         debugResults.html('<div class="kt-error-message">' +
                             '<strong>❌ Debug stats request failed</strong>' +
                             '</div>');
                     }
                 });
             };

             window.clearDebugLogs = function() {
                 if (!confirm("Are you sure you want to clear all debug logs?")) {
                     return;
                 }
                 
                 $.ajax({
                     url: window.ktCigarAjax.ajax_url,
                     type: "POST",
                     data: {
                         action: "kt_clear_debug_logs",
                         nonce: window.ktCigarAjax.nonce
                     },
                     success: function(response) {
                         if (response.success) {
                             $("#debug-results").html('<div class="kt-success-message">' +
                                 '<strong>✅ Debug logs cleared successfully</strong>' +
                                 '</div>');
                         } else {
                             $("#debug-results").html('<div class="kt-error-message">' +
                                 '<strong>❌ Failed to clear logs:</strong><br>' +
                                 '<small>' + response.data + '</small>' +
                                 '</div>');
                         }
                     },
                     error: function() {
                         $("#debug-results").html('<div class="kt-error-message">' +
                             '<strong>❌ Clear logs request failed</strong>' +
                             '</div>');
                     }
                 });
             };

             // Mapping functionality
             window.openMappingSuggestions = function(supplierId) {
                 $.ajax({
                     url: window.ktCigarAjax.ajax_url,
                     type: "POST",
                     data: {
                         action: "kt_get_mapping_suggestions",
                         nonce: window.ktCigarAjax.nonce,
                         supplier_id: supplierId
                     },
                     success: function(response) {
                         if (response.success) {
                             showMappingSuggestionsModal(response.data);
                         } else {
                             alert("Failed to get mapping suggestions: " + response.data);
                         }
                     },
                     error: function() {
                         alert("Failed to load mapping suggestions");
                     }
                 });
             };

             // Show mapping suggestions modal
             function showMappingSuggestionsModal(data) {
                 var supplier = data.supplier;
                 var suggestions = data.suggestions || [];
                 
                 var modalHtml = '<div class="kt-mapping-modal" style="position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.6);z-index:9999;overflow:auto;">' +
                     '<div style="position:relative;margin:20px auto;background:white;padding:12px;border-radius:6px;max-width:1100px;max-height:85vh;overflow:auto;margin-top:2vh;">' +
                     
                     '<button onclick="$(\'.kt-mapping-modal\').remove()" style="position:absolute;top:8px;right:12px;background:none;border:none;font-size:20px;cursor:pointer;">&times;</button>' +
                     '<h2 style="margin:0 0 12px;">🔍 Map Supplier to Master Product</h2>' +
                     
                     '<div style="background:#f8f9fa;padding:10px;border-radius:4px;margin-bottom:12px;">' +
                     '<h3 style="margin:0 0 8px;">📦 Supplier Product</h3>' +
                     '<div style="display:flex;gap:12px;align-items:start;">';
                 
                 // Add supplier image if available
                 if (supplier.supplier_image_url) {
                     modalHtml += '<img src="' + supplier.supplier_image_url + '" style="width:60px;height:60px;object-fit:cover;border-radius:4px;cursor:pointer;" onclick="viewLargerImage(\'' + supplier.supplier_image_url + '\')">';
                 }
                 
                 modalHtml += '<div style="flex:1;">' +
                     '<strong>' + supplier.supplier_title + '</strong><br>' +
                     '<small><strong>Brand:</strong> ' + (supplier.supplier_brand || 'N/A') + ' | ' +
                     '<strong>Price:</strong> $' + (supplier.supplier_price ? parseFloat(supplier.supplier_price).toLocaleString() : '0') + ' | ' +
                     '<strong>Qty:</strong> ' + (supplier.supplier_quantity || 'N/A') + ' | ' +
                     '<strong>ID:</strong> ' + (supplier.supplier_sku || supplier.id) + '</small>' +
                     '</div></div></div>';
                 
                 if (suggestions.length > 0) {
                     modalHtml += '<h3 style="margin:0 0 8px;">🎯 Suggested Matches</h3>' +
                         '<div style="max-height:350px;overflow-y:auto;">';
                     
                     suggestions.forEach(function(suggestion, index) {
                         var product = suggestion.internal_product || suggestion;
                         var score = suggestion.score || 0;
                         var scoreColor = score >= 70 ? '#28a745' : score >= 50 ? '#ffc107' : '#dc3545';
                         var matchDetails = suggestion.match_details || {};

                         modalHtml += '<div style="border:1px solid #ddd;padding:10px;margin:6px 0;border-radius:4px;">' +
                             '<div style="display:flex;justify-content:space-between;align-items:start;margin-bottom:8px;">' +
                             '<div style="flex:1;">' +
                             '<strong>' + (product.product_title || 'No Title') + '</strong><br>' +
                             '<small><strong>SKU:</strong> ' + (product.sku || 'No SKU') + ' | ' +
                             '<strong>Brand:</strong> ' + (product.brand || 'N/A') + ' | ' +
                             '<strong>Ring:</strong> ' + (product.seat_row || 'N/A') + ' x ' + (product.seat_number || 'N/A') + ' | ' +
                             '<strong>Price:</strong> $' + (product.recommended_retail_price || '0') + '</small><br>' +
                             '<strong style="color:' + scoreColor + ';">Match Score: ' + Math.round(score) + '%</strong>' +
                             '</div>' +
                             '<div style="display:flex;gap:5px;">' +
                             '<button onclick="confirmMapping(' + supplier.id + ', ' + product.id + ')" class="button button-primary" style="font-size:11px;padding:4px 8px;">✅ Select</button>' +
                             '<button onclick="showMatchAnalysis(' + index + ', ' + supplier.id + ', ' + product.id + ')" class="button" style="font-size:10px;padding:3px 6px;">🔍 Why?</button>' +
                             '<button onclick="remapProduct(' + supplier.id + ', ' + product.id + ')" class="button button-secondary" style="font-size:10px;padding:3px 6px;">🔄 Remap</button>' +
                             '</div>' +
                             '</div>' +
                             
                             // Match Analysis Details (Initially Hidden)
                             '<div id="match-analysis-' + index + '" style="display:none;background:#f8f9fa;padding:8px;border-radius:3px;font-size:10px;">' +
                             '<strong>🔍 Match Analysis:</strong><br>' +
                             '<div style="margin-top:4px;">' +
                             getMatchAnalysisHtml(matchDetails, supplier, product) +
                             '</div>' +
                             '</div>' +
                             '</div>';
                     });
                     
                     modalHtml += '</div>';
                 }
                 
                 modalHtml += '<hr style="margin:12px 0;">' +
                     '<h3 style="margin:0 0 8px;">🔍 Manual Search</h3>' +
                     '<div style="display:flex;gap:8px;margin-bottom:10px;">' +
                     '<input type="text" id="manual-search-input" placeholder="Search master products..." style="flex:1;padding:6px;">' +
                     '<button onclick="searchMasterForMapping(' + supplier.id + ')" class="button" style="padding:6px 12px;">Search</button>' +
                     '</div>' +
                     '<div id="manual-search-results"></div>' +
                     
                     '<hr style="margin:12px 0;">' +
                     '<div style="text-align:center;">' +
                     '<button onclick="createFromSupplier(' + supplier.id + ')" class="button button-secondary" style="margin-right:8px;">➕ Create New Master Product</button>' +
                     '<button type="button" class="button kt-cancel-mapping">Cancel</button>' +
                     '</div>' +
                     
                     '</div></div>';
                 
                 $('body').append(modalHtml);
                 
                 // Add event handlers for the modal
                 $('.kt-cancel-mapping').on('click', function() {
                     $('.kt-mapping-modal').remove();
                 });
                 
                 // Also fix the close button
                 $('.kt-mapping-modal button[onclick*="remove"]').off('onclick').on('click', function() {
                     $('.kt-mapping-modal').remove();
                 });
             }

             // Add remap functionality
             window.remapProduct = function(supplierId, currentMasterId) {
                 if (!confirm("Remove current mapping and search for new matches?")) {
                     return;
                 }
                 
                 $.ajax({
                     url: window.ktCigarAjax.ajax_url,
                     type: "POST",
                     data: {
                         action: "kt_reject_mapping",
                         nonce: window.ktCigarAjax.nonce,
                         supplier_id: supplierId
                     },
                     success: function(response) {
                         if (response.success) {
                             // Close current modal and reopen mapping suggestions
                             $(".kt-mapping-modal").remove();
                             openMappingSuggestions(supplierId);
                         } else {
                             alert("❌ Failed to remove mapping: " + response.data);
                         }
                     },
                     error: function() {
                         alert("❌ Remap request failed");
                     }
                 });
             };

             // View mapping details for perfect matches
             window.viewMappingDetails = function(supplierId) {
                 $.ajax({
                     url: window.ktCigarAjax.ajax_url,
                     type: "POST",
                     data: {
                         action: "kt_get_mapping_details",
                         nonce: window.ktCigarAjax.nonce,
                         supplier_id: supplierId
                     },
                     success: function(response) {
                         if (response.success) {
                             showMappingDetailsModal(response.data);
                         } else {
                             alert("Failed to load mapping details: " + response.data);
                         }
                     },
                     error: function() {
                         alert("Failed to load mapping details");
                     }
                 });
             };

             // Remap existing perfect match
             window.remapExistingProduct = function(supplierId) {
                 if (!confirm("Remove current mapping and search for new matches?")) {
                     return;
                 }
                 
                 $.ajax({
                     url: window.ktCigarAjax.ajax_url,
                     type: "POST",
                     data: {
                         action: "kt_remove_existing_mapping",
                         nonce: window.ktCigarAjax.nonce,
                         supplier_id: supplierId
                     },
                     success: function(response) {
                         if (response.success) {
                             alert("✅ Mapping removed. You can now create a new mapping.");
                             window.smartReload();
                         } else {
                             alert("❌ Failed to remove mapping: " + response.data);
                         }
                     },
                     error: function() {
                         alert("❌ Remove mapping request failed");
                     }
                 });
             };

             // Show mapping details modal
             function showMappingDetailsModal(data) {
                 var supplier = data.supplier;
                 var master = data.master;
                 var mapping = data.mapping;
                 
                 var modalHtml = '<div class="kt-mapping-details-modal" style="position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.6);z-index:9999;overflow:auto;">' +
                     '<div style="position:relative;margin:30px auto;background:white;padding:15px;border-radius:6px;max-width:800px;max-height:80vh;overflow:auto;">' +
                     '<button onclick="closeMappingDetailsModal()" style="position:absolute;top:10px;right:15px;background:none;border:none;font-size:20px;cursor:pointer;">&times;</button>' +
                     
                     '<h2 style="margin:0 0 15px;">🔗 Mapping Details</h2>' +
                     
                     '<div style="display:grid;grid-template-columns:1fr 1fr;gap:15px;margin-bottom:15px;">' +
                     
                     '<div style="background:#fff3cd;padding:12px;border-radius:4px;">' +
                     '<h3 style="margin:0 0 8px;">📦 Supplier Product</h3>' +
                     '<strong>' + supplier.supplier_title + '</strong><br>' +
                     '<small><strong>Brand:</strong> ' + (supplier.supplier_brand || 'N/A') + '</small><br>' +
                     '<small><strong>Price:</strong> $' + (supplier.supplier_price || '0.00') + '</small><br>' +
                     '<small><strong>ID:</strong> ' + (supplier.supplier_sku || supplier.id) + '</small>' +
                     '</div>' +
                     
                     '<div style="background:#d4edda;padding:12px;border-radius:4px;">' +
                     '<h3 style="margin:0 0 8px;">🎯 Master Product</h3>' +
                     '<strong>' + (master.product_title || 'No Title') + '</strong><br>' +
                     '<small><strong>SKU:</strong> ' + (master.sku || 'No SKU') + '</small><br>' +
                     '<small><strong>Brand:</strong> ' + (master.brand || 'N/A') + '</small><br>' +
                     '<small><strong>Price:</strong> $' + (master.recommended_retail_price || '0') + '</small>' +
                     '</div>' +
                     
                     '</div>' +
                     
                     '<div style="background:#f8f9fa;padding:12px;border-radius:4px;margin-bottom:15px;">' +
                     '<h3 style="margin:0 0 8px;">📊 Mapping Information</h3>' +
                     '<small><strong>Type:</strong> ' + (mapping.mapping_type || 'N/A') + '</small><br>' +
                     '<small><strong>Confidence:</strong> ' + (mapping.confidence_score || 'N/A') + '%</small><br>' +
                     '<small><strong>Created:</strong> ' + (mapping.created_at || 'N/A') + '</small>' +
                     '</div>' +
                     
                     '<div style="text-align:center;">' +
                     '<button onclick="showDetailedAnalysis(' + supplier.id + ', ' + master.id + ')" class="button button-primary" style="margin-right:10px;">🔍 View Analysis</button>' +
                     '<button onclick="remapExistingProduct(' + supplier.id + ')" class="button button-secondary" style="margin-right:10px;">🔄 Remap This Product</button>' +
                     '<button onclick="closeMappingDetailsModal()" class="button">Close</button>' +
                     '</div>' +
                     
                     '</div></div>';
                 
                 $('body').append(modalHtml);
             }

             // Confirm mapping
             window.confirmMapping = function(supplierId, masterId) {
                 $.ajax({
                     url: window.ktCigarAjax.ajax_url,
                     type: "POST",
                     data: {
                         action: "kt_confirm_mapping",
                         nonce: window.ktCigarAjax.nonce,
                         supplier_id: supplierId,
                         master_id: masterId
                     },
                     success: function(response) {
                         if (response.success) {
                             alert("✅ Mapping confirmed successfully!");
                             $('.kt-mapping-modal').remove();
                             window.smartReload();
                         } else {
                             alert("❌ Failed to confirm mapping: " + response.data);
                         }
                     },
                     error: function() {
                         alert("❌ Mapping request failed");
                     }
                 });
             };

             // Create from supplier
             window.createFromSupplier = function(supplierId) {
                 // Get supplier data first
                 $.ajax({
                     url: window.ktCigarAjax.ajax_url,
                     type: "POST",
                     data: {
                         action: "kt_get_supplier_product",
                         nonce: window.ktCigarAjax.nonce,
                         supplier_id: supplierId
                     },
                     success: function(response) {
                         if (response.success) {
                             showCreateNewModal(response.data);
                         } else {
                             alert("Failed to load supplier data: " + response.data);
                         }
                     },
                     error: function() {
                         alert("Failed to load supplier data");
                     }
                 });
             };

             // Show create new master product modal
             function showCreateNewModal(supplier) {
                 // Generate next SKU
                 $.ajax({
                     url: window.ktCigarAjax.ajax_url,
                     type: "POST",
                     data: {
                         action: "kt_generate_next_sku",
                         nonce: window.ktCigarAjax.nonce
                     },
                     success: function(response) {
                         var nextSku = response.success ? response.data.next_sku : 'CIG0001';
                         displayCreateNewModal(supplier, nextSku);
                     },
                     error: function() {
                        displayCreateNewModal(supplier, 'CIG0001');
                     }
                 });
             }

             function displayCreateNewModal(supplier, nextSku) {
                 // Extract suggested values from supplier keywords
                 var keywords = supplier.extracted_keywords ? JSON.parse(supplier.extracted_keywords) : [];
                 var suggestedBrand = '';
                 var suggestedRing = '';
                 var suggestedLength = '';
                 
                 keywords.forEach(function(keyword) {
                     if (keyword.startsWith('BRAND:')) {
                         suggestedBrand = keyword.replace('BRAND:', '');
                     } else if (keyword.startsWith('RING:')) {
                         suggestedRing = keyword.replace('RING:', '');
                     } else if (keyword.startsWith('LENGTH:')) {
                         suggestedLength = keyword.replace('LENGTH:', '').replace('mm', '');
                         // Convert mm to inches if needed
                         var lengthNum = parseFloat(suggestedLength);
                         if (lengthNum > 50) {
                             suggestedLength = (lengthNum / 25.4).toFixed(1);
                         }
                     }
                 });

                 var modalHtml = '<div class="kt-create-modal" style="position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.5);z-index:9999;overflow:auto;">' +
                     '<div style="position:relative;margin:20px auto;background:white;padding:20px;border-radius:8px;max-width:800px;max-height:90vh;overflow:auto;">' +
                     '<button onclick="$(\'.kt-create-modal\').remove()" style="position:absolute;top:10px;right:15px;background:none;border:none;font-size:24px;cursor:pointer;">&times;</button>' +
                     '<h2>➕ Create New Master Product</h2>' +
                     
                     '<div style="background:#e7f3ff;padding:15px;border-radius:5px;margin-bottom:20px;">' +
                     '<h3>📦 Source: Supplier Product</h3>' +
                     '<div style="display:flex;gap:15px;align-items:start;">';
                 
                 if (supplier.supplier_image_url) {
                     modalHtml += '<img src="' + supplier.supplier_image_url + '" style="width:80px;height:80px;object-fit:cover;border-radius:5px;">';
                 }
                 
                 modalHtml += '<div>' +
                     '<strong>' + supplier.supplier_title + '</strong><br>' +
                     '<small>Brand: ' + (supplier.supplier_brand || 'N/A') + '</small><br>' +
                     '<small>Price: $' + (supplier.supplier_price || '0.00') + '</small>' +
                     '</div></div></div>' +
                     
                   '<form id="create-new-form">' +
                     '<input type="hidden" id="source-supplier-id" value="' + supplier.id + '">' +
                     
                     '<div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;">' +
                     '<div>' +
                     '<h4>🏷️ Basic Information</h4>' +
                     '<p><label><strong>Auto-Generated SKU:</strong><br>' +
                     '<input type="text" id="new-sku" value="' + nextSku + '" style="width:100%;padding:8px;border:1px solid #ddd;border-radius:4px;" readonly>' +
                     '</label></p>' +
                     
                     '<p><label><strong>Product Title: *</strong><br>' +
                     '<textarea id="new-title" style="width:100%;padding:8px;border:1px solid #ddd;border-radius:4px;" rows="3" required>' + supplier.supplier_title + '</textarea>' +
                     '</label></p>' +
                     
                     '<p><label><strong>Brand: *</strong><br>' +
                     '<input type="text" id="new-brand" value="' + (suggestedBrand || supplier.supplier_brand || '') + '" style="width:100%;padding:8px;border:1px solid #ddd;border-radius:4px;" required>' +
                     '</label></p>' +
                     
                     '<p><label><strong>Price:</strong><br>' +
                     '<input type="number" id="new-price" value="' + (supplier.supplier_price || '') + '" step="0.01" min="0" style="width:100%;padding:8px;border:1px solid #ddd;border-radius:4px;">' +
                     '</label></p>' +
                     '</div>' +
                     
                     '<div>' +
                     '<h4>📏 Cigar Specifications</h4>' +
                     '<p><label><strong>Ring Gauge:</strong><br>' +
                     '<input type="number" id="new-ring" value="' + suggestedRing + '" min="20" max="80" style="width:100%;padding:8px;border:1px solid #ddd;border-radius:4px;">' +
                     '</label></p>' +
                     
                     '<p><label><strong>Length (inches):</strong><br>' +
                     '<input type="number" id="new-length" value="' + suggestedLength + '" step="0.1" min="3" max="12" style="width:100%;padding:8px;border:1px solid #ddd;border-radius:4px;">' +
                     '</label></p>' +
                     
                     '<p><label><strong>Description:</strong><br>' +
                     '<textarea id="new-description" style="width:100%;padding:8px;border:1px solid #ddd;border-radius:4px;" rows="4" placeholder="Detailed cigar description...">' + (supplier.supplier_description || '') + '</textarea>' +
                     '</label></p>' +
                     '</div>' +
                     '</div>' +
                     
                     '<div style="text-align:center;margin-top:20px;padding-top:20px;border-top:1px solid #ddd;">' +
                     '<button type="button" onclick="submitCreateNew()" class="button button-primary" style="margin-right:10px;">✅ Create & Map Product</button>' +
                     '<button type="button" onclick="$(\'.kt-create-modal\').remove()" class="button">Cancel</button>' +
                     '</div>' +
                     
                     '</form>' +
                     '</div></div>';
                 
                 $('body').append(modalHtml);
             }

             // Multi-select functions
             window.toggleAllSuppliers = function() {
                 var selectAll = document.getElementById('select-all-suppliers');
                 var checkboxes = document.querySelectorAll('.supplier-checkbox');
                 
                 checkboxes.forEach(function(checkbox) {
                     checkbox.checked = selectAll.checked;
                 });
                 
                 updateBulkRemapButton();
             };

             window.updateBulkRemapButton = function() {
                 var checkboxes = document.querySelectorAll('.supplier-checkbox:checked');
                 var bulkBtn = document.getElementById('bulk-remap-btn');
                 
                 if (checkboxes.length > 0) {
                     bulkBtn.style.display = 'inline-block';
                     bulkBtn.textContent = 'Bulk Remap Selected (' + checkboxes.length + ')';
                 } else {
                     bulkBtn.style.display = 'none';
                 }
             };

             window.bulkRemapSelected = function() {
                 var checkboxes = document.querySelectorAll('.supplier-checkbox:checked');
                 if (checkboxes.length === 0) {
                     alert('Please select products to remap');
                     return;
                 }
                 
                var productIds = Array.from(checkboxes).map(cb => cb.value);
                 
                 if (!confirm('Are you sure you want to remove mappings for ' + productIds.length + ' products?')) {
                     return;
                 }
                 
                 // Process bulk remap
                 $.ajax({
                     url: window.ktCigarAjax.ajax_url,
                     type: "POST",
                     data: {
                         action: "kt_bulk_remap_products",
                         nonce: window.ktCigarAjax.nonce,
                         product_ids: productIds
                     },
                     success: function(response) {
                         if (response.success) {
                             alert('✅ ' + productIds.length + ' products remapped successfully');
                             window.location.reload();
                         } else {
                             alert('❌ Bulk remap failed: ' + response.data);
                         }
                     },
                     error: function() {
                         alert('❌ Bulk remap request failed');
                     }
                 });
             };

             // Inline editing functions
             window.enableInlineEdit = function(productId, field) {
                 var cell = document.getElementById('master-' + field + '-' + productId);
                 var currentValue = cell.textContent.trim();
                 var inputType = (field === 'recommended_retail_price' || field === 'seat_row' || field === 'seat_number') ? 'number' : 'text';
                 
                 cell.innerHTML = '<input type="' + inputType + '" value="' + currentValue + '" onblur="saveInlineEdit(' + productId + ', \'' + field + '\', this.value)" onkeypress="if(event.key===\'Enter\')this.blur()" style="width:100%;border:1px solid #0073aa;">';
                 cell.querySelector('input').focus();
             };

             window.saveInlineEdit = function(productId, field, newValue) {
                 var cell = document.getElementById('master-' + field + '-' + productId);
                 
                 $.ajax({
                     url: window.ktCigarAjax.ajax_url,
                     type: "POST",
                     data: {
                         action: "kt_inline_edit_master",
                         nonce: window.ktCigarAjax.nonce,
                         product_id: productId,
                         field: field,
                         value: newValue
                     },
                     success: function(response) {
                         if (response.success) {
                             cell.innerHTML = '<span onclick="enableInlineEdit(' + productId + ', \'' + field + '\')" style="cursor:pointer;border-bottom:1px dotted #999;">' + newValue + '</span>';
                         } else {
                             alert('Save failed: ' + response.data);
                             cell.innerHTML = newValue; // Revert
                         }
                     },
                     error: function() {
                         alert('Save request failed');
                         cell.innerHTML = newValue; // Revert
                     }
                 });
             };

             // Quick copy function
             window.quickCopyFromSupplier = function(supplierId) {
                 $.ajax({
                     url: window.ktCigarAjax.ajax_url,
                     type: "POST",
                     data: {
                         action: "kt_get_supplier_for_copy",
                         nonce: window.ktCigarAjax.nonce,
                         supplier_id: supplierId
                     },
                     success: function(response) {
                         if (response.success) {
                             showQuickCopyModal(response.data);
                         } else {
                             alert('Failed to load supplier data: ' + response.data);
                         }
                     },
                     error: function() {
                         alert('Failed to load supplier data');
                     }
                 });
             };

             window.showQuickCopyModal = function(supplier) {
                 // Get suggested brand and next SKU
                 $.ajax({
                     url: window.ktCigarAjax.ajax_url,
                     type: "POST",
                     data: {
                         action: "kt_get_next_sku_for_brand",
                         nonce: window.ktCigarAjax.nonce,
                         brand: supplier.supplier_brand
                     },
                     success: function(skuResponse) {
                         var nextSku = skuResponse.success ? skuResponse.data.next_sku : 'AUTO001';
                         displayQuickCopyModal(supplier, nextSku);
                     },
                     error: function() {
                         displayQuickCopyModal(supplier, 'AUTO001');
                     }
                 });
             };

             window.displayQuickCopyModal = function(supplier, nextSku) {
                 // Remove any existing modals
                 $('.kt-quick-copy-modal').remove();
                 
                 console.log('Quick Copy - Supplier data:', supplier);
                 
                 // Extract brand, dimensions from title and keywords
                 var suggestedBrand = supplier.supplier_brand || '';
                 var suggestedRing = '';
                 var suggestedLength = '';
                 
                 // FIRST: Try to extract from title directly using patterns
                 var title = supplier.supplier_title || '';
                 console.log('Quick Copy - Processing title:', title);
                 
                 // Extract brand from title if not provided
                 if (!suggestedBrand && title) {
                     // Try to get first meaningful segment
                     var titleParts = title.split(/[\s\-_（(【\[]+/);
                     if (titleParts.length > 0 && titleParts[0].length >= 2) {
                         suggestedBrand = titleParts[0];
                         console.log('Quick Copy - Extracted brand from title:', suggestedBrand);
                     }
                 }
                 
                 // Extract dimensions from title using multiple patterns
                 var dimensionPatterns = [
                     /(\d{2,3})\s*[×x*X]\s*(\d{2,3})/,  // 50x150, 50×150
                     /(\d{2,3})\*(\d{2,3})/,            // 50*150
                     /【(\d{2,3})×(\d{2,3})】/,          // 【50×150】
                     /[\(（]\s*(\d{2,3})\s*[×x*X]\s*(\d{2,3})\s*[\)）]/, // (50×150)
                     /(\d{2,3})\/(\d{1,3}(?:\.\d+)?)/   // 50/5.5
                 ];
                 
                 for (var i = 0; i < dimensionPatterns.length; i++) {
                     var match = title.match(dimensionPatterns[i]);
                     if (match) {
                         var num1 = parseFloat(match[1]);
                         var num2 = parseFloat(match[2]);
                         console.log('Quick Copy - Found dimension match:', match[0], '→', num1, 'x', num2);
                         
                         // Smart assignment based on typical ranges
                         if (num1 >= 20 && num1 <= 80 && num2 >= 80 && num2 <= 250) {
                             // Ring x Length (mm)
                             suggestedRing = num1.toString();
                             suggestedLength = (num2 / 25.4).toFixed(1);
                             console.log('Quick Copy - Pattern 1: Ring x Length(mm)');
                         } else if (num2 >= 20 && num2 <= 80 && num1 >= 80 && num1 <= 250) {
                             // Length (mm) x Ring
                             suggestedRing = num2.toString();
                             suggestedLength = (num1 / 25.4).toFixed(1);
                             console.log('Quick Copy - Pattern 2: Length(mm) x Ring');
                         } else if (num1 >= 20 && num1 <= 80 && num2 >= 3 && num2 <= 12) {
                             // Ring x Length (inches)
                             suggestedRing = num1.toString();
                             suggestedLength = num2.toString();
                             console.log('Quick Copy - Pattern 3: Ring x Length(inches)');
                         } else if (num2 >= 20 && num2 <= 80 && num1 >= 3 && num1 <= 12) {
                             // Length (inches) x Ring
                             suggestedRing = num2.toString();
                             suggestedLength = num1.toString();
                             console.log('Quick Copy - Pattern 4: Length(inches) x Ring');
                         }
                         
                         if (suggestedRing && suggestedLength) {
                             console.log('Quick Copy - Successfully extracted dimensions:', suggestedRing, 'x', suggestedLength);
                             break;
                         }
                     }
                 }
                 
                 // SECOND: Try to extract from keywords if title extraction failed
                 if ((!suggestedRing || !suggestedLength || !suggestedBrand) && supplier.extracted_keywords) {
                     try {
                         var keywords = typeof supplier.extracted_keywords === 'string' ? 
                             JSON.parse(supplier.extracted_keywords) : supplier.extracted_keywords;
                         
                         console.log('Quick Copy - Processing keywords:', keywords);
                         
                         if (Array.isArray(keywords)) {
                             keywords.forEach(function(keyword) {
                                 if (keyword.startsWith('RING:') && !suggestedRing) {
                                     suggestedRing = keyword.replace('RING:', '');
                                     console.log('Quick Copy - Found RING from keywords:', suggestedRing);
                                 } else if (keyword.startsWith('LENGTH:') && !suggestedLength) {
                                     var length = keyword.replace('LENGTH:', '').replace('mm', '');
                                     if (parseFloat(length) > 50) {
                                         suggestedLength = (parseFloat(length) / 25.4).toFixed(1);
                                     } else {
                                         suggestedLength = length;
                                     }
                                     console.log('Quick Copy - Found LENGTH from keywords:', suggestedLength);
                                 } else if (keyword.startsWith('BRAND:') && !suggestedBrand) {
                                     suggestedBrand = keyword.replace('BRAND:', '');
                                     console.log('Quick Copy - Found BRAND from keywords:', suggestedBrand);
                                 }
                             });
                         }
                     } catch (e) {
                         console.log('Quick Copy - Error parsing keywords:', e);
                     }
                 }
                 
                 console.log('Quick Copy - Final suggestions:', {
                     brand: suggestedBrand, 
                     ring: suggestedRing, 
                     length: suggestedLength
                 });
                 
                 var modal = $('<div class="kt-quick-copy-modal" style="position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.6);z-index:9999;overflow:auto;">' +
                     '<div style="position:relative;margin:20px auto;background:white;padding:20px;border-radius:8px;max-width:700px;">' +
                     '<button type="button" class="close-quick-copy" style="position:absolute;top:10px;right:15px;background:none;border:none;font-size:24px;cursor:pointer;">&times;</button>' +
                     '<h2>🚀 Quick Copy & Create</h2>' +
                     
                     '<div style="background:#f0f8ff;padding:15px;border-radius:5px;margin-bottom:20px;">' +
                     '<h3>📦 Source: ' + (supplier.supplier_title || 'No Title') + '</h3>' +
                     '<small>Brand: ' + (supplier.supplier_brand || 'N/A') + ' | Price: $' + (supplier.supplier_price || '0') + '</small>' +
                     '</div>' +
                     
                     '<form id="quick-copy-form">' +
                     '<input type="hidden" id="copy-supplier-id" value="' + supplier.id + '">' +
                     
                     '<div style="display:grid;grid-template-columns:1fr 1fr;gap:15px;">' +
                     '<div>' +
                     '<p><label><strong>Auto SKU:</strong><br>' +
                     '<input type="text" id="copy-sku" value="' + nextSku + '" style="width:100%;padding:8px;border:1px solid #ddd;border-radius:4px;"></label></p>' +
                     
                     '<p><label><strong>Title:</strong><br>' +
                     '<textarea id="copy-title" style="width:100%;padding:8px;border:1px solid #ddd;border-radius:4px;" rows="2">' + (supplier.supplier_title || '') + '</textarea></label></p>' +
                     
                     '<p><label><strong>Brand:</strong><br>' +
                     '<input type="text" id="copy-brand" value="' + suggestedBrand + '" style="width:100%;padding:8px;border:1px solid #ddd;border-radius:4px;' + (suggestedBrand ? 'background:#e8f5e8;' : '') + '"></label></p>' +
                     '</div>' +
                     
                     '<div>' +
                     '<p><label><strong>Price:</strong><br>' +
                     '<input type="number" id="copy-price" value="' + (supplier.supplier_price || '') + '" step="0.01" style="width:100%;padding:8px;border:1px solid #ddd;border-radius:4px;"></label></p>' +
                     
                     '<p><label><strong>Ring Gauge:</strong><br>' +
                     '<input type="number" id="copy-ring" value="' + suggestedRing + '" style="width:100%;padding:8px;border:1px solid #ddd;border-radius:4px;' + (suggestedRing ? 'background:#e8f5e8;' : '') + '"></label></p>' +
                     
                     '<p><label><strong>Length (inches):</strong><br>' +
                     '<input type="number" id="copy-length" value="' + suggestedLength + '" step="0.1" style="width:100%;padding:8px;border:1px solid #ddd;border-radius:4px;' + (suggestedLength ? 'background:#e8f5e8;' : '') + '"></label></p>' +
                     '</div>' +
                     '</div>' +
                     
                     '<p><label><strong>Description:</strong><br>' +
                     '<textarea id="copy-description" style="width:100%;padding:8px;border:1px solid #ddd;border-radius:4px;" rows="3">' + (supplier.supplier_description || '') + '</textarea></label></p>' +
                     
                     '<div style="text-align:center;margin-top:20px;">' +
                     '<button type="button" class="button button-primary submit-quick-copy">🚀 Create & Map</button>' +
                     '<button type="button" class="button cancel-quick-copy">Cancel</button>' +
                     '</div>' +
                     
                     '</form>' +
                     '</div></div>');
                 
                 $('body').append(modal);
                 
                 // Add event handlers
                 modal.find('.close-quick-copy, .cancel-quick-copy').on('click', function() {
                     modal.remove();
                 });
                 
                 modal.find('.submit-quick-copy').on('click', function() {
                     submitQuickCopy();
                 });
                 
                 // Click outside to close
                 modal.on('click', function(e) {
                     if (e.target === this) {
                         modal.remove();
                     }
                 });
             };

             window.submitQuickCopy = function() {
                 var formData = {
                     action: "kt_quick_copy_create",
                     nonce: window.ktCigarAjax.nonce,
                     supplier_id: $("#copy-supplier-id").val(),
                     sku: $("#copy-sku").val(),
                     title: $("#copy-title").val(),
                     brand: $("#copy-brand").val(),
                     ring: $("#copy-ring").val() || '',
                     length: $("#copy-length").val() || '',
                     price: $("#copy-price").val() || '',
                     description: $("#copy-description").val()
                 };
                 
                 // Validate required fields
                 if (!formData.title.trim() || !formData.sku.trim()) {
                     alert('Please fill in Title and SKU');
                     return;
                 }
                 
                 // Disable button during submission
                 $('.submit-quick-copy').prop('disabled', true).text('Creating...');
                 
                 $.ajax({
                     url: window.ktCigarAjax.ajax_url,
                     type: "POST",
                     data: formData,
                     success: function(response) {
                         if (response.success) {
                             alert("✅ Product created and mapped successfully!");
                             $(".kt-quick-copy-modal").remove();
                             window.location.reload();
                         } else {
                             alert("❌ Failed: " + (response.data || 'Unknown error'));
                             $('.submit-quick-copy').prop('disabled', false).text('🚀 Create & Map');
                         }
                     },
                     error: function(xhr, status, error) {
                         console.error('Quick copy error:', xhr, status, error);
                         alert("❌ Request failed: " + error);
                         $('.submit-quick-copy').prop('disabled', false).text('🚀 Create & Map');
                     }
                 });
             }; 

             window.updatePriceDisplays = function() {
                 if (!confirm('Update price displays for all existing products?')) return;
                 
                 $.ajax({
                     url: window.ktCigarAjax.ajax_url,
                     type: "POST",
                     data: {
                         action: "kt_update_price_displays",
                         nonce: window.ktCigarAjax.nonce
                     },
                     success: function(response) {
                         if (response.success) {
                             alert("✅ " + response.data);
                             window.location.reload();
                         } else {
                             alert("❌ Failed: " + response.data);
                         }
                     },
                     error: function() {
                         alert("❌ Request failed");
                     }
                 });
             };

             // Submit create new master product
             window.submitCreateNew = function() {
                 var formData = {
                     action: "kt_create_and_map",
                     nonce: window.ktCigarAjax.nonce,
                     supplier_id: $("#source-supplier-id").val(),
                     sku: $("#new-sku").val(),
                     title: $("#new-title").val(),
                     brand: $("#new-brand").val(),
                     ring: $("#new-ring").val(),
                     length: $("#new-length").val(),
                     price: $("#new-price").val(),
                     description: $("#new-description").val()
                 };
                 
                 // Validate required fields
                 if (!formData.title.trim() || !formData.brand.trim()) {
                     alert("Please fill in all required fields (Title and Brand)");
                     return;
                 }
                 
                 // Show loading
                 $(".kt-create-modal .button-primary").prop("disabled", true).text("Creating...");
                 
                 $.ajax({
                     url: window.ktCigarAjax.ajax_url,
                     type: "POST",
                     data: formData,
                     success: function(response) {
                         if (response.success) {
                             alert("✅ New master product created and mapped successfully!");
                             $(".kt-create-modal").remove();
                             window.smartReload();
                         } else {
                             alert("❌ Failed to create product: " + response.data);
                             $(".kt-create-modal .button-primary").prop("disabled", false).text("✅ Create & Map Product");
                         }
                     },
                     error: function() {
                         alert("❌ Create request failed");
                         $(".kt-create-modal .button-primary").prop("disabled", false).text("✅ Create & Map Product");
                     }
                 });
             };

             // Search master for mapping
             window.searchMasterForMapping = function(supplierId) {
                 var searchTerm = $("#manual-search-input").val();
                 if (!searchTerm || searchTerm.trim() === "") {
                     alert("Please enter a search term");
                     return;
                 }
                 
                 $.ajax({
                     url: window.ktCigarAjax.ajax_url,
                     type: "POST",
                     data: {
                         action: "kt_search_master_detailed",
                         nonce: window.ktCigarAjax.nonce,
                         search: searchTerm
                     },
                     success: function(response) {
                         if (response.success) {
                             displayManualSearchResults(response.data.products, supplierId);
                         } else {
                             $("#manual-search-results").html('<p>Search failed: ' + response.data + '</p>');
                         }
                     },
                     error: function() {
                         $("#manual-search-results").html('<p>Search request failed</p>');
                     }
                 });
             };

             function displayManualSearchResults(products, supplierId) {
                 if (products.length === 0) {
                     $("#manual-search-results").html('<p>No products found matching your search.</p>');
                     return;
                 }
                 
                 var resultsHtml = '<div style="max-height:200px;overflow-y:auto;border:1px solid #ddd;border-radius:4px;">';
                 
                 products.forEach(function(product) {
                     resultsHtml += '<div style="padding:8px;border-bottom:1px solid #eee;display:flex;justify-content:space-between;align-items:center;">' +
                         '<div>' +
                         '<strong>' + (product.product_title || 'No Title') + '</strong><br>' +
                         '<small>SKU: ' + (product.sku || 'No SKU') + ' | Brand: ' + (product.brand || 'N/A') + ' | Ring: ' + (product.seat_row || 'N/A') + ' x ' + (product.seat_number || 'N/A') + '</small>' +
                         '</div>' +
                         '<button onclick="confirmMapping(' + supplierId + ', ' + product.id + ')" class="button button-primary" style="font-size:11px;">Select</button>' +
                         '</div>';
                 });
                 
                 resultsHtml += '</div>';
                 $("#manual-search-results").html(resultsHtml);
             }

             // Initialize tabs on page load
             function initializeTabs() {
                 var activeTab = 'dashboard';
                 if (typeof Storage !== "undefined") {
                     activeTab = localStorage.getItem('kt_active_tab') || 'dashboard';
                 }
                 
                 // Hide all tabs first
                 $(".tab-content").hide().removeClass("active");
                 $(".nav-tab").removeClass("nav-tab-active");
                 
                 // Show the remembered tab
                 $("#" + activeTab + "-tab").show().addClass("active");
                 $("a[data-tab='" + activeTab + "']").addClass("nav-tab-active");
                 
                 console.log("Initialized with tab:", activeTab);
             }

             // Call initialization
             initializeTabs();

             // Add event handlers for dynamically loaded content
             $(document).on('click', '.kt-quick-copy-btn', function() {
                 var supplierId = $(this).data('supplier-id');
                 quickCopyFromSupplier(supplierId);
             });

             console.log("KT Cigar Matcher admin interface initialized");
             console.log("ktCigarAjax available:", window.ktCigarAjax);

        }); // End of jQuery(document).ready
      });
      </script>
      <?php
  }
});
