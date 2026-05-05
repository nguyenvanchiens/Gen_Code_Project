import React, { useState } from 'react';
import './HelperPage.css';

const GUIDES = [
  {
    id: 'monsterasp',
    title: 'Publish API ASP.NET Core lên MonsterASP',
    icon: '🚀',
    description: 'Dành cho Blazor Server, Web API, Razor Pages',
    steps: [
      {
        title: 'Tạo dự án',
        content: [
          'Mở Visual Studio hoặc Visual Studio Code',
          'Tạo project mới: chọn <strong>ASP.NET Core Web Application</strong>',
          'Chọn template: <strong>Web API</strong> hoặc <strong>Web Application (Razor Pages)</strong> tùy nhu cầu',
          'Đặt tên project và chọn thư mục lưu trữ',
        ],
      },
      {
        title: 'Phát triển & kiểm tra',
        content: [
          'Cài đặt các package, middleware, controller, service... như bình thường',
          'Kiểm tra app chạy ổn định ở localhost trước khi publish',
          'Chạy thử bằng <code>F5</code> hoặc <code>dotnet run</code> để đảm bảo API trả về kết quả đúng',
        ],
      },
      {
        title: 'Publish dự án',
        content: [
          'Mở project trong Visual Studio',
          'Chuột phải vào project &rarr; chọn <strong>Publish</strong>',
          'Trong cửa sổ Publish:',
          '&nbsp;&nbsp;&bull; Chọn <strong>Folder</strong> làm đích đến',
          '&nbsp;&nbsp;&bull; Chọn hoặc tạo một profile publish mới',
          '&nbsp;&nbsp;&bull; Chọn thư mục (VD: <code>C:\\MyProject\\publish</code>) để lưu file đã publish',
          '&nbsp;&nbsp;&bull; Nhấn <strong>Publish</strong>',
          'Sau khi publish hoàn tất, bạn sẽ thấy thư mục chứa đầy đủ file <code>.dll</code>, <code>.json</code>, <code>web.config</code>, <code>wwwroot</code>... sẵn sàng triển khai',
        ],
      },
      {
        title: 'Chuẩn bị upload',
        content: [
          'Truy cập thư mục publish',
          'Chọn <strong>toàn bộ file và thư mục bên trong</strong>, nén thành 1 file <code>.zip</code>',
          '<em>Lưu ý: Chỉ nén nội dung bên trong, không nén cả thư mục cha</em>',
        ],
      },
      {
        title: 'Tạo website trên MonsterASP',
        content: [
          'Truy cập: <a href="https://admin.monsterasp.net/" target="_blank">admin.monsterasp.net</a>',
          'Đăng nhập tài khoản',
          'Vào menu <strong>Files</strong> &rarr; <strong>Create new service</strong> &rarr; <strong>Create website</strong>',
          'Chọn gói hosting (dùng thử &rarr; chọn bản miễn phí)',
          'Điền tên website và các thông tin cần thiết',
          'Khi hoàn tất, website sẽ hiển thị trong danh sách',
        ],
      },
      {
        title: 'Upload & triển khai',
        content: [
          '<strong>Cách 1: Upload thủ công</strong>',
          '&nbsp;&nbsp;&bull; Trong phần quản lý file &rarr; truy cập <code>wwwroot</code> của site vừa tạo',
          '&nbsp;&nbsp;&bull; Upload file <code>.zip</code> lên',
          '&nbsp;&nbsp;&bull; Chuột phải vào file <code>.zip</code> &rarr; chọn <strong>Extract</strong>',
          '&nbsp;&nbsp;&bull; Đảm bảo các file được giải nén đúng trong thư mục gốc',
          '&nbsp;&nbsp;&bull; Truy cập website để kiểm tra',
          '',
          '<strong>Cách 2: Dùng FTP Publish Profile</strong>',
          '&nbsp;&nbsp;&bull; Truy cập trang <strong>Deploy</strong> của site trong Admin MonsterASP',
          '&nbsp;&nbsp;&bull; Tải về file cấu hình <code>.PublishSettings</code>',
          '&nbsp;&nbsp;&bull; Trong Visual Studio: Chuột phải project &rarr; <strong>Publish</strong> &rarr; <strong>Import Profile...</strong>',
          '&nbsp;&nbsp;&bull; Chọn file <code>.PublishSettings</code> vừa tải',
          '&nbsp;&nbsp;&bull; Lần sau chỉ cần bấm <strong>Publish</strong> &rarr; Visual Studio tự upload qua FTP',
        ],
      },
      {
        title: 'Kiểm tra kết quả',
        content: [
          'Truy cập đường dẫn website bạn vừa tạo',
          'Kiểm tra bằng cách gọi các endpoint API hoặc truy cập trang chủ',
          'Nếu mọi thứ đúng, website hoặc API của bạn sẽ hoạt động',
        ],
      },
    ],
  },
  {
    id: 'cloudflare-blazor',
    title: 'Deploy Blazor WebAssembly lên Cloudflare Pages',
    icon: '☁️',
    description: 'Dành cho Blazor WASM Standalone (chỉ giao diện, không có API)',
    steps: [
      {
        title: 'Tạo dự án Blazor',
        content: [
          'Mở Visual Studio Code',
          'Tạo dự án <strong>Blazor WebAssembly Standalone App</strong>',
          'Đây là dạng ứng dụng chỉ giao diện (client-side), không cấu hình API phía server',
        ],
      },
      {
        title: 'Build dự án',
        content: [
          'Mở terminal, đứng ở folder chứa <code>wwwroot</code> và chạy lệnh:',
          '<code>dotnet publish -c Release -o build</code>',
          'Sau khi chạy xong, thư mục <code>build/wwwroot/</code> sẽ chứa toàn bộ file tĩnh: <code>index.html</code>, <code>.dll</code>, <code>.js</code>, <code>.css</code>...',
        ],
      },
      {
        title: 'Deploy lên Cloudflare Pages',
        content: [
          'Truy cập: <a href="https://dash.cloudflare.com/" target="_blank">dash.cloudflare.com</a> &rarr; Đăng nhập',
          'Vào <strong>Workers & Pages</strong> &rarr; tab <strong>Pages</strong> &rarr; <strong>Direct Upload</strong>',
          'Đặt tên cho project &rarr; hệ thống tạo domain tạm',
          'Nhấn <strong>Upload folder</strong> &rarr; chọn toàn bộ nội dung trong <code>build/wwwroot/</code>',
          '<em>Lưu ý: Chỉ chọn nội dung bên trong, không chọn cả thư mục wwwroot</em>',
          'Nhấn <strong>Deploy site</strong>',
          'Truy cập domain tạm để kiểm tra kết quả',
        ],
      },
      {
        title: 'Trỏ domain riêng (tuỳ chọn)',
        content: [
          'Sau khi domain đã <strong>Active</strong> trong Cloudflare, quay lại dashboard',
          'Vào project Pages &rarr; tab <strong>Custom domains</strong> &rarr; <strong>Set up a custom domain</strong>',
          'Nhập tên domain của bạn &rarr; xác nhận',
          'Khi domain hiện trạng thái <strong>Active</strong> &rarr; hoàn tất',
        ],
      },
    ],
    summary: [
      'Tạo & build Blazor WebAssembly: <code>dotnet publish -c Release -o build</code>',
      'Upload nội dung <code>build/wwwroot/</code> lên Cloudflare Pages &rarr; Deploy',
      'Thêm domain vào Cloudflare &rarr; trỏ nameservers',
      'Gắn domain vào dự án Pages &rarr; Active &rarr; Chạy',
    ],
  },
  {
    id: 'glab-install',
    title: 'Cài đặt glab CLI để Claude Code thao tác với GitLab',
    icon: '🔧',
    description: 'Bước chuẩn bị bắt buộc trước khi chạy quy trình GitLab Flow với Claude Code',
    steps: [
      {
        title: 'Mục đích & yêu cầu',
        content: [
          '<strong>glab</strong> là CLI chính thức của GitLab, cho phép thao tác MR/issue/pipeline trực tiếp từ terminal',
          'Claude Code dùng glab để: lấy diff MR, review code, post comment, approve, merge',
          '<em>Không có glab → các prompt như <code>review the MR !21</code>, <code>post review result to the MR</code>, <code>merge the request</code> sẽ không chạy được</em>',
          'Yêu cầu: Windows 10/11 có sẵn <strong>winget</strong> (Windows Package Manager)',
        ],
      },
      {
        title: 'Tìm package ID đúng',
        content: [
          '<em>Lưu ý: package ID trên winget phân biệt hoa-thường, đừng đoán theo tên thương hiệu</em>',
          'Chạy lệnh tìm trong PowerShell:',
          '<code>winget search glab</code>',
          'Output sẽ ra dạng:',
          '&nbsp;&nbsp;<code>GLab    GLab.GLab    1.93.0    winget</code>',
          '<strong>ID đúng là <code>GLab.GLab</code></strong> (KHÔNG phải <code>GitLab.glab</code>, <code>GitLab.GLab</code>...)',
          '<em>Nếu không tìm thấy, chạy <code>winget source update</code> rồi thử lại</em>',
        ],
      },
      {
        title: 'Cài đặt',
        content: [
          'Trong PowerShell, chạy:',
          '<code>winget install GLab.GLab</code>',
          'winget tự download và cài',
          '<strong>Đóng PowerShell và mở cửa sổ mới</strong> để biến môi trường PATH cập nhật',
        ],
      },
      {
        title: 'Verify cài đặt',
        content: [
          'Mở terminal mới, chạy:',
          '<code>glab --version</code>',
          'Kết quả mong đợi: hiển thị version (vd <code>glab 1.93.0</code>)',
          '<em>Nếu báo "command not found" / "không nhận diện" → khởi động lại máy hoặc kiểm tra PATH</em>',
        ],
      },
      {
        title: 'Tạo Personal Access Token trên GitLab',
        content: [
          'Mở GitLab công ty trên trình duyệt (vd <code>https://git.fastlink.vn</code>)',
          'Vào <strong>User Settings &rarr; Access Tokens</strong>',
          'Hoặc mở thẳng URL có scope preset (link sẽ in ra khi chạy <code>glab auth login</code>):',
          '&nbsp;&nbsp;<code>https://&lt;gitlab-host&gt;/-/user_settings/personal_access_tokens?scopes=api,write_repository</code>',
          'Điền thông tin:',
          '&nbsp;&nbsp;&bull; <strong>Token name</strong>: <code>glab-cli</code> (gì cũng được)',
          '&nbsp;&nbsp;&bull; <strong>Expiration date</strong>: chọn ngày xa (vd 1 năm sau, hoặc max policy công ty cho phép)',
          '&nbsp;&nbsp;&bull; <strong>Scopes</strong>: tick <code>api</code> và <code>write_repository</code>',
          'Click <strong>Create personal access token</strong>',
          '<strong>⚠️ Token chỉ hiện 1 lần duy nhất sau khi tạo — bấm nút Copy ngay (chuỗi bắt đầu bằng <code>glpat-</code>)</strong>',
        ],
      },
      {
        title: 'Đăng nhập glab',
        content: [
          'Trong PowerShell, chạy (thay <code>git.fastlink.vn</code> bằng hostname GitLab công ty):',
          '<code>glab auth login --hostname git.fastlink.vn</code>',
          'Trả lời các câu hỏi tuần tự:',
          '&nbsp;&nbsp;&bull; <strong>What protocol?</strong> &rarr; chọn <code>HTTPS</code>',
          '&nbsp;&nbsp;&bull; <strong>Authenticate Git with your GitLab credentials?</strong> &rarr; <code>Y</code>',
          '&nbsp;&nbsp;&bull; <strong>Paste your authentication token</strong>:',
          '&nbsp;&nbsp;&nbsp;&nbsp;&bull; Trong PowerShell, paste bằng <strong>chuột phải</strong> (KHÔNG dùng Ctrl+V)',
          '&nbsp;&nbsp;&nbsp;&nbsp;&bull; Token <strong>không hiển thị</strong> trên màn hình — đây là tính năng bảo mật, không phải lỗi',
          '&nbsp;&nbsp;&nbsp;&nbsp;&bull; Sau khi paste, nhấn <strong>Enter</strong>',
          '&nbsp;&nbsp;&bull; <strong>Choose default Git protocol</strong> &rarr; <code>HTTPS</code>',
          '<em>Nếu lỗi <code>401 Unauthorized</code>: token paste sai/thiếu — tạo token mới (revoke cái cũ) và login lại</em>',
        ],
      },
      {
        title: 'Verify đăng nhập',
        content: [
          'Chạy:',
          '<code>glab auth status</code>',
          'Output mong đợi:',
          '&nbsp;&nbsp;<code>git.fastlink.vn</code>',
          '&nbsp;&nbsp;&nbsp;&nbsp;<code>✓ Logged in to git.fastlink.vn as &lt;username&gt;</code>',
          '&nbsp;&nbsp;&nbsp;&nbsp;<code>✓ Token found: ******</code>',
          '<em>Nếu thấy thêm dòng <code>✗ gitlab.com 401</code> — bỏ qua, đó là entry mặc định không liên quan</em>',
        ],
      },
      {
        title: 'Test với project thật',
        content: [
          'Cd vào project đã clone từ GitLab:',
          '<code>cd D:\\path\\to\\your-project</code>',
          'Chạy thử:',
          '<code>glab mr list</code>',
          'Ra danh sách MR &rarr; thành công, sẵn sàng dùng skill GitLab Flow với Claude Code',
          '<em>glab tự đọc <code>git remote -v</code> của thư mục hiện tại để biết gọi API tới GitLab nào</em>',
        ],
      },
      {
        title: 'Login 1 lần — dùng cho nhiều project',
        content: [
          '<strong>Mỗi GitLab host chỉ login 1 lần</strong>: mọi project trên cùng host dùng chung token đó',
          'Vd: tất cả project ở <code>git.fastlink.vn</code> mà tài khoản bạn có quyền đều thao tác được sau 1 lần đăng nhập',
          'Quyền trên từng project = quyền GitLab của tài khoản (Maintainer/Developer/Reporter)',
          '',
          '<strong>Trường hợp nhiều GitLab instance</strong> (vd cá nhân + công ty):',
          '&nbsp;&nbsp;<code>glab auth login --hostname gitlab.com</code>',
          '&nbsp;&nbsp;<code>glab auth login --hostname git.fastlink.vn</code>',
          'Mỗi host token riêng, glab tự match host với remote của project',
          '<em>Token lưu ở: <code>%APPDATA%\\glab-cli\\config.yml</code></em>',
        ],
      },
    ],
    summary: [
      'Tìm ID: <code>winget search glab</code> &rarr; <strong><code>GLab.GLab</code></strong> (không phải <code>GitLab.glab</code>)',
      'Cài: <code>winget install GLab.GLab</code> &rarr; mở terminal mới',
      'Verify: <code>glab --version</code>',
      'Tạo token: GitLab &rarr; Access Tokens, scope <code>api</code> + <code>write_repository</code>',
      'Login: <code>glab auth login --hostname &lt;host-công-ty&gt;</code>',
      'Paste token bằng <strong>chuột phải</strong> trong PowerShell (token sẽ ẩn — bình thường)',
      'Verify auth: <code>glab auth status</code>',
      'Test: <code>cd</code> vào project rồi <code>glab mr list</code>',
      'Login 1 lần dùng được cho mọi project trên cùng host',
    ],
  },
  {
    id: 'cc-gitlab-flow',
    title: 'Quy trình code với Claude Code & push lên GitLab',
    icon: '🦊',
    description: 'Các bước chuẩn cho một tính năng/sửa lỗi mới',
    diagram: 'uml',
    steps: [
      {
        title: 'Nhận task trên Jira',
        content: [
          'Ví dụ: <strong>WRA-40</strong> &mdash; cấu hình bảo mật, chỉ cho phép tài khoản từ domain chỉ định được đăng nhập',
          'Trong phần mô tả của task: nên ghi rõ cách thức triển khai',
          '<em>Mẹo: mô tả càng rõ thì càng có thể copy &amp; paste thẳng vào Claude Code làm prompt</em>',
        ],
      },
      {
        title: 'Tạo nhánh mới từ main',
        content: [
          'Sử dụng prompt với Claude Code:',
          '<code>create branch feature/WRA-40-Gioi-han-domain-account</code>',
          '<em>Quy ước đặt tên nhánh: <code>feature/&lt;TASK-ID&gt;-&lt;mo-ta-ngan&gt;</code></em>',
        ],
      },
      {
        title: 'Tạo prompt từ nội dung task',
        content: [
          'Copy nội dung mô tả của task Jira',
          'Paste vào Claude Code làm prompt yêu cầu sinh code',
          '<em>Nếu mô tả thiếu chi tiết, có thể bổ sung thêm context như: file liên quan, chuẩn coding, framework đang dùng...</em>',
        ],
      },
      {
        title: 'Review code do Claude Code sinh ra',
        content: [
          'Sau khi CC sinh code xong, thực hiện thêm một lần review với prompt:',
          '<code>review the last change</code>',
          'Claude Code sẽ tự kiểm tra lại các thay đổi vừa tạo và chỉ ra điểm cần lưu ý',
        ],
      },
      {
        title: 'Test thử',
        content: [
          'Với tính năng đơn giản, code ít &rarr; có thể test thử ngay',
          'Chạy ứng dụng và kiểm tra golden path + một số edge case chính',
          '<em>Với tính năng phức tạp hơn: viết unit test hoặc integration test trước khi push</em>',
        ],
      },
      {
        title: 'Commit & Push',
        content: [
          'Sử dụng prompt:',
          '<code>Commit and push</code>',
          'Claude Code sẽ tự động:',
          '&nbsp;&nbsp;&bull; Tạo commit message theo chuẩn quy định (Conventional Commits hoặc theo project)',
          '&nbsp;&nbsp;&bull; Push lên git server',
        ],
      },
      {
        title: 'Tạo Merge Request',
        content: [
          '<strong>Cách 1: Qua UI GitLab</strong>',
          '&nbsp;&nbsp;&bull; Truy cập GitLab &rarr; vào project &rarr; <strong>Merge Requests</strong> &rarr; <strong>New merge request</strong>',
          '&nbsp;&nbsp;&bull; Source branch: nhánh vừa push, Target branch: <code>main</code>',
          '',
          '<strong>Cách 2: Dùng prompt với Claude Code</strong>',
          '&nbsp;&nbsp;&bull; <code>create a merge request</code>',
          '&nbsp;&nbsp;&bull; Claude Code sẽ tự tạo MR (ví dụ: <strong>MR !21</strong>)',
        ],
      },
      {
        title: 'Review MR (dành cho người review)',
        content: [
          'Cài đặt <strong>glab CLI</strong> (GitLab CLI) trên máy của reviewer',
          'Sau đó dùng prompt:',
          '<code>review the MR !21</code>',
          'Claude Code sẽ pull thông tin MR về và phân tích các thay đổi',
        ],
      },
      {
        title: 'Post comment vào MR',
        content: [
          'Sau khi review xong, có thể đẩy kết quả review lên MR bằng prompt:',
          '<code>post review result to the MR</code>',
          'Comment sẽ được đăng trực tiếp lên MR trên GitLab',
        ],
      },
      {
        title: 'Fix các issues được nêu ra',
        content: [
          'Người làm task có thể fix luôn bằng prompt:',
          '<code>fix all issues, commit then push</code>',
          'Hoặc fix theo từng issue cụ thể:',
          '<code>fix issue #1, #2, commit then push</code>',
          '<em>Claude Code sẽ tự động fix &rarr; commit &rarr; push trong một lượt</em>',
        ],
      },
      {
        title: 'Accept & Merge',
        content: [
          'Khi MR đã được approve và CI pass, dùng prompt:',
          '<code>merge the request</code>',
          'Hoặc bấm nút <strong>Merge</strong> trên UI GitLab',
          '<em>Sau khi merge, nên xóa nhánh feature để giữ repo gọn gàng</em>',
        ],
      },
    ],
    summary: [
      'Tạo nhánh: <code>create branch feature/&lt;TASK&gt;-&lt;mo-ta&gt;</code>',
      'Sinh code: paste mô tả Jira làm prompt',
      'Review tự động: <code>review the last change</code>',
      'Commit &amp; push: <code>Commit and push</code>',
      'Tạo MR: <code>create a merge request</code>',
      'Review MR (cần glab CLI): <code>review the MR !&lt;ID&gt;</code>',
      'Post comment: <code>post review result to the MR</code>',
      'Fix &amp; push: <code>fix all issues, commit then push</code>',
      'Merge: <code>merge the request</code>',
    ],
  },
  {
    id: 'github-pages',
    title: 'Trỏ GitHub Pages về domain riêng',
    icon: '🔗',
    description: 'Cấu hình custom domain cho GitHub Pages',
    steps: [
      {
        title: 'Đẩy source code lên GitHub',
        content: [
          'Tạo repository trên GitHub (public hoặc private)',
          'Push source code lên GitHub như bình thường',
        ],
      },
      {
        title: 'Bật GitHub Pages',
        content: [
          'Truy cập repository &rarr; tab <strong>Settings</strong>',
          'Trong sidebar chọn <strong>Pages</strong>',
          'Phần <strong>Build and deployment</strong>:',
          '&nbsp;&nbsp;&bull; Source: chọn <strong>Deploy from a branch</strong>',
          '&nbsp;&nbsp;&bull; Branch: chọn <code>main</code> hoặc <code>gh-pages</code>, folder <code>/ (root)</code> hoặc <code>/docs</code>',
          'GitHub sẽ sinh domain tạm: <code>your-username.github.io</code>',
        ],
      },
      {
        title: 'Thêm file CNAME',
        content: [
          'Trong thư mục gốc của repo (cùng cấp với <code>index.html</code>), tạo file tên <code>CNAME</code>',
          'Bên trong file, dán domain riêng của bạn, ví dụ: <code>yourdomain.vn</code>',
          'Commit và push file này lên GitHub',
          'GitHub Pages sẽ tự nhận diện domain riêng của bạn',
        ],
      },
      {
        title: 'Cấu hình DNS',
        content: [
          'Truy cập quản lý domain (VD: ZoneDNS, Cloudflare, GoDaddy...)',
          '',
          '<strong>Bản ghi A (trỏ domain gốc, không www):</strong>',
        ],
        table: {
          headers: ['Type', 'Name', 'Value'],
          rows: [
            ['A', '@', '185.199.108.153'],
            ['A', '@', '185.199.109.153'],
            ['A', '@', '185.199.110.153'],
            ['A', '@', '185.199.111.153'],
          ],
        },
        contentAfterTable: [
          '<em>GitHub Pages phân phối qua nhiều IP để tăng khả năng chịu tải và giảm nguy cơ downtime. Có thể dùng 1, nhưng nên dùng đủ 4.</em>',
          '',
          '<strong>Bản ghi CNAME (trỏ www):</strong>',
        ],
        table2: {
          headers: ['Type', 'Name', 'Value'],
          rows: [
            ['CNAME', 'www', 'your-username.github.io'],
          ],
        },
        contentAfterTable2: [
          '<em>Tên CNAME <code>www</code> nghĩa là <code>www.yourdomain.vn</code> sẽ trỏ về GitHub Pages</em>',
        ],
      },
      {
        title: 'Kiểm tra & hoàn tất',
        content: [
          'Đợi DNS cập nhật (khoảng 5 &ndash; 30 phút)',
          'Truy cập domain bạn vừa cấu hình',
          'Nếu hiển thị site GitHub Pages &rarr; thành công',
          '<em>Nếu <code>www</code> chạy mà domain gốc không chạy (hoặc ngược lại), bật redirect bên DNS provider hoặc cấu hình thêm bản ghi</em>',
        ],
      },
    ],
  },
];

function HelperPage() {
  const [activeGuide, setActiveGuide] = useState('monsterasp');
  const [expandedSteps, setExpandedSteps] = useState({});

  const guide = GUIDES.find((g) => g.id === activeGuide);

  const toggleStep = (index) => {
    setExpandedSteps((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const expandAll = () => {
    const all = {};
    guide.steps.forEach((_, i) => { all[i] = true; });
    setExpandedSteps(all);
  };

  const collapseAll = () => {
    setExpandedSteps({});
  };

  const renderUmlActivity = () => {
    const W = 720;
    const H = 790;
    const laneW = 345;
    const devX = 182;
    const revX = 537;
    const boxW = 280;
    const boxH = 40;

    const nodes = [
      { y: 110, lane: 'dev', n: 1, title: 'Nhận task Jira', sub: 'WRA-40' },
      { y: 160, lane: 'dev', n: 2, title: 'Tạo nhánh', sub: '⌨ create branch feature/WRA-40-...' },
      { y: 210, lane: 'dev', n: 3, title: 'Sinh code', sub: '📋 paste mô tả task → CC' },
      { y: 260, lane: 'dev', n: 4, title: 'Self-review', sub: '⌨ review the last change' },
      { y: 310, lane: 'dev', n: 5, title: 'Test thử', sub: 'chạy app, kiểm tra' },
      { y: 360, lane: 'dev', n: 6, title: 'Commit & Push', sub: '⌨ Commit and push' },
      { y: 410, lane: 'dev', n: 7, title: 'Tạo Merge Request', sub: '⌨ create a merge request' },
      { y: 460, lane: 'rev', n: 8, title: 'Review MR', sub: '⌨ review the MR !21' },
      { y: 510, lane: 'rev', n: 9, title: 'Post comment', sub: '⌨ post review result to the MR' },
    ];
    const decY = 570;
    const fixY = 645;
    const mergeY = 710;
    const endY = 765;

    const cx = (lane) => (lane === 'dev' ? devX : revX);

    const ActivityBox = ({ x, y, n, title, sub, color, fill }) => (
      <g>
        <rect x={x - boxW / 2} y={y - boxH / 2} width={boxW} height={boxH}
          rx="10" ry="10" fill={fill || '#fff'} stroke={color} strokeWidth="2" />
        <text x={x} y={y - 5} textAnchor="middle" fontSize="13" fontWeight="700" fill="#1e293b">
          {n}. {title}
        </text>
        <text x={x} y={y + 14} textAnchor="middle" fontSize="11"
          fill="#64748b" fontFamily="Consolas, 'Courier New', monospace">
          {sub}
        </text>
      </g>
    );

    return (
      <div className="uml-diagram">
        <div className="uml-header">
          <span className="uml-title">📐 UML Activity Diagram — cc-gitlab-flow</span>
        </div>
        <svg viewBox={`0 0 ${W} ${H}`} xmlns="http://www.w3.org/2000/svg" className="uml-svg">
          <defs>
            <marker id="arr" viewBox="0 0 10 10" refX="9" refY="5"
              markerWidth="6" markerHeight="6" orient="auto">
              <path d="M0,0 L10,5 L0,10 z" fill="#475569" />
            </marker>
            <marker id="arr-loop" viewBox="0 0 10 10" refX="9" refY="5"
              markerWidth="6" markerHeight="6" orient="auto">
              <path d="M0,0 L10,5 L0,10 z" fill="#dc2626" />
            </marker>
            <marker id="arr-ok" viewBox="0 0 10 10" refX="9" refY="5"
              markerWidth="6" markerHeight="6" orient="auto">
              <path d="M0,0 L10,5 L0,10 z" fill="#16a34a" />
            </marker>
          </defs>

          {/* Swimlanes */}
          <rect x="10" y="10" width={laneW} height={H - 20}
            fill="#eef2ff" stroke="#c7d2fe" strokeWidth="1.5" rx="10" />
          <rect x={20 + laneW} y="10" width={laneW} height={H - 20}
            fill="#fff7ed" stroke="#fdba74" strokeWidth="1.5" rx="10" />

          {/* Lane headers */}
          <path d={`M10,20 Q10,10 20,10 L${10 + laneW - 10},10 Q${10 + laneW},10 ${10 + laneW},20 L${10 + laneW},50 L10,50 Z`} fill="#4f46e5" />
          <path d={`M${20 + laneW},20 Q${20 + laneW},10 ${30 + laneW},10 L${20 + 2 * laneW - 10},10 Q${20 + 2 * laneW},10 ${20 + 2 * laneW},20 L${20 + 2 * laneW},50 L${20 + laneW},50 Z`} fill="#ea580c" />
          <text x={devX} y="36" fill="#fff" fontSize="15" fontWeight="700" textAnchor="middle">
            👨‍💻 Developer
          </text>
          <text x={revX} y="36" fill="#fff" fontSize="15" fontWeight="700" textAnchor="middle">
            👀 Reviewer
          </text>

          {/* Start node */}
          <circle cx={devX} cy="72" r="10" fill="#1e293b" />
          <line x1={devX} y1="82" x2={devX} y2={nodes[0].y - boxH / 2}
            stroke="#475569" strokeWidth="1.5" markerEnd="url(#arr)" />

          {/* Activities (1-9) */}
          {nodes.map((n, i) => (
            <ActivityBox key={i} x={cx(n.lane)} y={n.y} n={n.n}
              title={n.title} sub={n.sub}
              color={n.lane === 'dev' ? '#4f46e5' : '#ea580c'} />
          ))}

          {/* Sequential arrows in dev lane (1→2→3→4→5→6→7) */}
          {nodes.slice(0, 6).map((n, i) => {
            const next = nodes[i + 1];
            if (n.lane === 'dev' && next.lane === 'dev') {
              return (
                <line key={`d${i}`} x1={devX} y1={n.y + boxH / 2}
                  x2={devX} y2={next.y - boxH / 2}
                  stroke="#475569" strokeWidth="1.5" markerEnd="url(#arr)" />
              );
            }
            return null;
          })}

          {/* Cross 7 (dev) → 8 (reviewer) */}
          <line x1={devX + boxW / 2} y1={nodes[6].y}
            x2={revX - boxW / 2} y2={nodes[7].y}
            stroke="#475569" strokeWidth="1.5" strokeDasharray="5 4"
            markerEnd="url(#arr)" />

          {/* 8 → 9 in reviewer lane */}
          <line x1={revX} y1={nodes[7].y + boxH / 2}
            x2={revX} y2={nodes[8].y - boxH / 2}
            stroke="#475569" strokeWidth="1.5" markerEnd="url(#arr)" />

          {/* Cross 9 (reviewer) → decision (dev) */}
          <line x1={revX - boxW / 2} y1={nodes[8].y}
            x2={devX + 50} y2={decY}
            stroke="#475569" strokeWidth="1.5" strokeDasharray="5 4"
            markerEnd="url(#arr)" />

          {/* Decision diamond */}
          <polygon points={`${devX},${decY - 30} ${devX + 50},${decY} ${devX},${decY + 30} ${devX - 50},${decY}`}
            fill="#fef9c3" stroke="#ca8a04" strokeWidth="2" />
          <text x={devX} y={decY + 4} textAnchor="middle"
            fontSize="12" fontWeight="700" fill="#713f12">MR đạt?</text>

          {/* Branch: Chưa đạt → fix */}
          <path d={`M ${devX - 50},${decY} L 50,${decY} L 50,${fixY} L ${devX - boxW / 2},${fixY}`}
            fill="none" stroke="#dc2626" strokeWidth="1.5" markerEnd="url(#arr-loop)" />
          <text x="60" y={decY - 8} fill="#dc2626" fontSize="12" fontWeight="700">Chưa đạt</text>

          {/* Fix issues box (step 10) */}
          <rect x={devX - boxW / 2} y={fixY - boxH / 2} width={boxW} height={boxH}
            rx="10" ry="10" fill="#fee2e2" stroke="#dc2626" strokeWidth="2" />
          <text x={devX} y={fixY - 5} textAnchor="middle" fontSize="13" fontWeight="700" fill="#7f1d1d">
            10. Fix issues
          </text>
          <text x={devX} y={fixY + 14} textAnchor="middle" fontSize="11"
            fill="#991b1b" fontFamily="Consolas, 'Courier New', monospace">
            ⌨ fix all issues, commit then push
          </text>

          {/* Loop back: fix → review (step 8) */}
          <path d={`M ${devX + boxW / 2},${fixY} L ${W - 25},${fixY} L ${W - 25},${nodes[7].y} L ${revX + boxW / 2},${nodes[7].y}`}
            fill="none" stroke="#dc2626" strokeWidth="1.5" strokeDasharray="5 4" markerEnd="url(#arr-loop)" />
          <text x={W - 110} y={fixY - 8} fill="#dc2626" fontSize="11" fontStyle="italic">↻ review lại</text>

          {/* Branch: Đạt → merge */}
          <line x1={devX} y1={decY + 30} x2={devX} y2={mergeY - boxH / 2}
            stroke="#16a34a" strokeWidth="1.5" markerEnd="url(#arr-ok)" />
          <text x={devX + 12} y={decY + 52} fill="#16a34a" fontSize="12" fontWeight="700">Đạt</text>

          {/* Merge box (step 11) */}
          <rect x={devX - boxW / 2} y={mergeY - boxH / 2} width={boxW} height={boxH}
            rx="10" ry="10" fill="#dcfce7" stroke="#16a34a" strokeWidth="2" />
          <text x={devX} y={mergeY - 5} textAnchor="middle" fontSize="13" fontWeight="700" fill="#14532d">
            11. Merge
          </text>
          <text x={devX} y={mergeY + 14} textAnchor="middle" fontSize="11"
            fill="#166534" fontFamily="Consolas, 'Courier New', monospace">
            ⌨ merge the request
          </text>

          {/* Merge → end */}
          <line x1={devX} y1={mergeY + boxH / 2} x2={devX} y2={endY - 12}
            stroke="#475569" strokeWidth="1.5" markerEnd="url(#arr)" />

          {/* End node (bullseye) */}
          <circle cx={devX} cy={endY} r="11" fill="none" stroke="#1e293b" strokeWidth="2" />
          <circle cx={devX} cy={endY} r="6" fill="#1e293b" />
        </svg>
      </div>
    );
  };

  const renderDiagram = () => renderUmlActivity();

  const renderTable = (table) => (
    <table className="guide-table">
      <thead>
        <tr>
          {table.headers.map((h, i) => <th key={i}>{h}</th>)}
        </tr>
      </thead>
      <tbody>
        {table.rows.map((row, i) => (
          <tr key={i}>
            {row.map((cell, j) => <td key={j}><code>{cell}</code></td>)}
          </tr>
        ))}
      </tbody>
    </table>
  );

  return (
    <>
      <header className="page-header">
        <h1>Helper</h1>
        <p className="page-subtitle">Hướng dẫn Publish & Triển khai ứng dụng</p>
      </header>

      <div className="guide-nav">
        {GUIDES.map((g) => (
          <button
            key={g.id}
            className={`guide-nav-btn ${activeGuide === g.id ? 'active' : ''}`}
            onClick={() => { setActiveGuide(g.id); setExpandedSteps({}); }}
          >
            <span className="guide-nav-icon">{g.icon}</span>
            <div className="guide-nav-text">
              <span className="guide-nav-title">{g.title}</span>
              <span className="guide-nav-desc">{g.description}</span>
            </div>
          </button>
        ))}
      </div>

      {guide && (
        <div className="guide-content">
          <div className="guide-header">
            <h2>{guide.icon} {guide.title}</h2>
            <div className="guide-actions">
              <button className="guide-action-btn" onClick={expandAll}>Mở tất cả</button>
              <button className="guide-action-btn" onClick={collapseAll}>Thu gọn</button>
            </div>
          </div>

          {guide.diagram && renderDiagram()}

          <div className="guide-steps">
            {guide.steps.map((step, i) => (
              <div key={i} className={`guide-step ${expandedSteps[i] ? 'expanded' : ''}`}>
                <button className="guide-step-header" onClick={() => toggleStep(i)}>
                  <span className="guide-step-number">{i + 1}</span>
                  <span className="guide-step-title">{step.title}</span>
                  <span className="guide-step-arrow">{expandedSteps[i] ? '▾' : '▸'}</span>
                </button>
                {expandedSteps[i] && (
                  <div className="guide-step-body">
                    {step.content && step.content.map((line, j) => (
                      line === '' ? <div key={j} className="guide-spacer"></div> :
                      <div key={j} className="guide-line" dangerouslySetInnerHTML={{ __html: line }} />
                    ))}
                    {step.table && renderTable(step.table)}
                    {step.contentAfterTable && step.contentAfterTable.map((line, j) => (
                      line === '' ? <div key={`at${j}`} className="guide-spacer"></div> :
                      <div key={`at${j}`} className="guide-line" dangerouslySetInnerHTML={{ __html: line }} />
                    ))}
                    {step.table2 && renderTable(step.table2)}
                    {step.contentAfterTable2 && step.contentAfterTable2.map((line, j) => (
                      <div key={`at2${j}`} className="guide-line" dangerouslySetInnerHTML={{ __html: line }} />
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {guide.summary && (
            <div className="guide-summary">
              <h3>Tóm tắt nhanh</h3>
              {guide.summary.map((line, i) => (
                <div key={i} className="guide-summary-item">
                  <span className="guide-check">✅</span>
                  <span dangerouslySetInnerHTML={{ __html: line }} />
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default HelperPage;
