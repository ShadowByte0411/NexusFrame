const preloadedImages = [
    {
        id: 1,
        title: "Mountain Sunrise",
        description: "Captured at 5 AM from Everest base camp",
        url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1350&q=80",
        photographer: "Alex Morgan",
        photographerAvatar: "https://randomuser.me/api/portraits/men/32.jpg",
        tags: ["landscape", "sunrise", "mountains"]
    },
    {
        id: 2,
        title: "Urban Jungle",
        description: "Cityscape from the rooftop",
        url: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1344&q=80",
        photographer: "Sarah Chen",
        photographerAvatar: "https://randomuser.me/api/portraits/women/44.jpg",
        tags: ["urban", "city", "architecture"]
    },
    {
        id: 3,
        title: "Wildlife Portrait",
        description: "Elephant in its natural habitat",
        url: "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80",
        photographer: "James Wilson",
        photographerAvatar: "https://randomuser.me/api/portraits/men/22.jpg",
        tags: ["wildlife", "nature", "animals"]
    },
    {
        id: 4,
        title: "Abstract Colors",
        description: "Experimental light painting",
        url: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1350&q=80",
        photographer: "Maya Patel",
        photographerAvatar: "https://randomuser.me/api/portraits/women/33.jpg",
        tags: ["abstract", "colors", "experimental"]
    },
    {
        id: 5,
        title: "Ocean Waves",
        description: "Long exposure shot at sunset",
        url: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1352&q=80",
        photographer: "Carlos Ruiz",
        photographerAvatar: "https://randomuser.me/api/portraits/men/67.jpg",
        tags: ["ocean", "waves", "long exposure"]
    },
    {
        id: 6,
        title: "Portrait Session",
        description: "Natural light portrait photography",
        url: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1348&q=80",
        photographer: "Emma Thompson",
        photographerAvatar: "https://randomuser.me/api/portraits/women/26.jpg",
        tags: ["portrait", "people", "natural light"]
    }
];

// Preloaded photographers
const preloadedPhotographers = [
    {
        id: 1,
        name: "Alex Morgan",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        bio: "Landscape photographer with 10+ years experience",
        location: "Colorado, USA",
        specialty: "Landscape & Nature",
        online: true
    },
    {
        id: 2,
        name: "Sarah Chen",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        bio: "Urban and architecture photography specialist",
        location: "New York, USA",
        specialty: "Urban & Architecture",
        online: true
    },
    {
        id: 3,
        name: "James Wilson",
        avatar: "https://randomuser.me/api/portraits/men/22.jpg",
        bio: "Wildlife conservation photographer",
        location: "Nairobi, Kenya",
        specialty: "Wildlife & Conservation",
        online: false
    },
    {
        id: 4,
        name: "Maya Patel",
        avatar: "https://randomuser.me/api/portraits/women/33.jpg",
        bio: "Experimental and abstract photography",
        location: "London, UK",
        specialty: "Abstract & Experimental",
        online: true
    },
    {
        id: 5,
        name: "Carlos Ruiz",
        avatar: "https://randomuser.me/api/portraits/men/67.jpg",
        bio: "Seascape and ocean photography",
        location: "Barcelona, Spain",
        specialty: "Seascape & Ocean",
        online: true
    },
    {
        id: 6,
        name: "Emma Thompson",
        avatar: "https://randomuser.me/api/portraits/women/26.jpg",
        bio: "Portrait and fashion photographer",
        location: "Paris, France",
        specialty: "Portrait & Fashion",
        online: false
    }
];
const mockConversations = [
    {
        id: 1,
        photographerId: 1,
        photographerName: "Alex Morgan",
        photographerAvatar: "https://randomuser.me/api/portraits/men/32.jpg",
        lastMessage: "Thanks for the feedback on my mountain shots!",
        timestamp: "10:30 AM",
        unread: 2,
        messages: [
            {
                id: 1,
                sender: "photographer",
                content: "Hi! Thanks for connecting with me.",
                timestamp: "10:15 AM"
            },
            {
                id: 2,
                sender: "photographer",
                content: "I saw you liked my mountain sunrise photo. That was taken at 5 AM after a 3-hour hike!",
                timestamp: "10:20 AM"
            },
            {
                id: 3,
                sender: "user",
                content: "That's amazing! The lighting is perfect. What camera settings did you use?",
                timestamp: "10:25 AM"
            },
            {
                id: 4,
                sender: "photographer",
                content: "Thanks for the feedback on my mountain shots!",
                timestamp: "10:30 AM"
            }
        ]
    },
    {
        id: 2,
        photographerId: 2,
        photographerName: "Sarah Chen",
        photographerAvatar: "https://randomuser.me/api/portraits/women/44.jpg",
        lastMessage: "Let me know if you need urban photography tips!",
        timestamp: "Yesterday",
        unread: 0,
        messages: [
            {
                id: 1,
                sender: "user",
                content: "Hi Sarah, I love your urban photography style!",
                timestamp: "Yesterday, 3:45 PM"
            },
            {
                id: 2,
                sender: "photographer",
                content: "Thank you! Urban photography is all about finding unique perspectives.",
                timestamp: "Yesterday, 4:20 PM"
            },
            {
                id: 3,
                sender: "photographer",
                content: "Let me know if you need urban photography tips!",
                timestamp: "Yesterday, 4:30 PM"
            }
        ]
    },
    {
        id: 3,
        photographerId: 4,
        photographerName: "Maya Patel",
        photographerAvatar: "https://randomuser.me/api/portraits/women/33.jpg",
        lastMessage: "The light painting technique requires patience but results are worth it!",
        timestamp: "2 days ago",
        unread: 1,
        messages: [
            {
                id: 1,
                sender: "photographer",
                content: "Hello! I noticed you liked my abstract colors photo.",
                timestamp: "2 days ago, 11:00 AM"
            },
            {
                id: 2,
                sender: "user",
                content: "Yes! The colors are mesmerizing. How did you achieve that effect?",
                timestamp: "2 days ago, 11:30 AM"
            },
            {
                id: 3,
                sender: "photographer",
                content: "It's a combination of long exposure and moving colored lights in a dark room.",
                timestamp: "2 days ago, 12:00 PM"
            },
            {
                id: 4,
                sender: "photographer",
                content: "The light painting technique requires patience but results are worth it!",
                timestamp: "2 days ago, 12:15 PM"
            }
        ]
    }
];

let currentUser = null;
let uploadedImages = JSON.parse(localStorage.getItem('uploadedImages')) || [];
let users = JSON.parse(localStorage.getItem('users')) || [
    { id: 1, name: "John Doe", email: "demo@nexusframe.com", password: "demo123", bio: "Professional photographer", avatar: "JD" }
];
let conversations = JSON.parse(localStorage.getItem('conversations')) || mockConversations;
let activeChatId = null;

const pages = document.querySelectorAll('.page');
const navLinks = document.querySelectorAll('.nav-link');
const loginBtn = document.getElementById('login-btn');
const signupBtn = document.getElementById('signup-btn');
const profileBtn = document.getElementById('profile-btn');
const authBtns = document.querySelector('.auth-btns');
const profileSection = document.querySelector('.profile-section');
const joinTodayBtn = document.getElementById('join-today-btn');
const toSignup = document.getElementById('to-signup');
const toLogin = document.getElementById('to-login');
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const uploadArea = document.getElementById('upload-area');
const fileInput = document.getElementById('file-input');
const previewContainer = document.getElementById('preview-container');
const uploadSubmit = document.getElementById('upload-submit');
const notification = document.getElementById('notification');
const featuredGallery = document.getElementById('featured-gallery');
const mainGallery = document.getElementById('main-gallery');
const photographersGrid = document.getElementById('photographers-grid');
const messageBadge = document.getElementById('message-badge');
const messagesLink = document.getElementById('messages-link');
const conversationsList = document.getElementById('conversations-list');
const chatContainer = document.getElementById('chat-container');
const activeChat = document.getElementById('active-chat');
const chatMessages = document.getElementById('chat-messages');
const messageInput = document.getElementById('message-input');
const sendMessageBtn = document.getElementById('send-message-btn');
const quickMessageBtns = document.querySelectorAll('.quick-message-btn');
const newChatBtn = document.getElementById('new-chat-btn');

function initThreeJS() {
    const container = document.getElementById('three-container');
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);
    
    const geometry = new THREE.IcosahedronGeometry(1, 0);
    const material = new THREE.MeshPhongMaterial({ 
        color: 0x0f4c75, 
        shininess: 100,
        transparent: true,
        opacity: 0.3
    });
    
    const shapes = [];
    for (let i = 0; i < 15; i++) {
        const shape = new THREE.Mesh(geometry, material);
        shape.position.x = Math.random() * 40 - 20;
        shape.position.y = Math.random() * 40 - 20;
        shape.position.z = Math.random() * 40 - 20;
        shape.scale.setScalar(Math.random() * 2 + 0.5);
        scene.add(shape);
        shapes.push(shape);
    }
  
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0x00b4d8, 0.8);
    directionalLight.position.set(10, 10, 5);
    scene.add(directionalLight);
    
    camera.position.z = 30;

    function animate() {
        requestAnimationFrame(animate);
        
        shapes.forEach(shape => {
            shape.rotation.x += 0.005;
            shape.rotation.y += 0.005;
            shape.position.y += Math.sin(Date.now() * 0.001 + shape.position.x) * 0.01;
        });
        
        renderer.render(scene, camera);
    }
    
    animate();

    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
}

function showNotification(message, type = 'info') {
    notification.textContent = message;
    notification.className = `notification ${type} show`;
    
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

function switchPage(pageId) {
    pages.forEach(page => {
        page.classList.remove('active');
        if (page.id === `${pageId}-page`) {
            page.classList.add('active');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-page') === pageId) {
            link.classList.add('active');
        }
    });

    updateMessageBadge();
}

function renderGallery(container, images) {
    container.innerHTML = '';
    
    images.forEach(image => {
        const card = document.createElement('div');
        card.className = 'photo-card';
        card.innerHTML = `
            <img src="${image.url}" alt="${image.title}">
            <div class="photo-info">
                <h3>${image.title}</h3>
                <p>${image.description}</p>
                <div class="photographer">
                    <img src="${image.photographerAvatar}" alt="${image.photographer}">
                    <span>${image.photographer}</span>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

function renderPhotographers() {
    photographersGrid.innerHTML = '';
    
    preloadedPhotographers.forEach(photographer => {
        const card = document.createElement('div');
        card.className = 'photographer-card';
        card.innerHTML = `
            <img src="${photographer.avatar}" alt="${photographer.name}">
            <h3>${photographer.name}</h3>
            <p>${photographer.bio}</p>
            <p><strong>Location:</strong> ${photographer.location}</p>
            <p><strong>Specialty:</strong> ${photographer.specialty}</p>
            <p><strong>Status:</strong> <span class="${photographer.online ? 'online' : 'offline'}">${photographer.online ? 'Online' : 'Offline'}</span></p>
            <button class="connect-btn" data-photographer-id="${photographer.id}">Connect</button>
        `;
        photographersGrid.appendChild(card);
    });
}

function updateMessageBadge() {
    const totalUnread = conversations.reduce((total, conv) => total + conv.unread, 0);
    
    if (totalUnread > 0) {
        messageBadge.textContent = totalUnread > 9 ? '9+' : totalUnread;
        messageBadge.classList.remove('hidden');
    } else {
        messageBadge.classList.add('hidden');
    }
}

function renderConversationsList() {
    conversationsList.innerHTML = '';
    if (conversations.length === 0) {
        conversationsList.innerHTML = `
            <div class="no-conversations">
                <p>No conversations yet. Connect with photographers to start messaging!</p>
            </div>
        `;
        return;
    }
    
    conversations.forEach(conversation => {
        const conversationItem = document.createElement('div');
        conversationItem.className = `conversation-item ${activeChatId === conversation.id ? 'active' : ''}`;
        conversationItem.dataset.conversationId = conversation.id;
        
        conversationItem.innerHTML = `
            <img src="${conversation.photographerAvatar}" alt="${conversation.photographerName}" class="conversation-avatar">
            <div class="conversation-info">
                <h4>${conversation.photographerName}</h4>
                <p>${conversation.lastMessage}</p>
                <div class="conversation-time">${conversation.timestamp}</div>
            </div>
            ${conversation.unread > 0 ? `<div class="unread-badge">${conversation.unread}</div>` : ''}
        `;
        
        conversationItem.addEventListener('click', () => {
            openChat(conversation.id);
        });
        
        conversationsList.appendChild(conversationItem);
    });
}

function openChat(conversationId) {
    activeChatId = conversationId;
    const conversation = conversations.find(c => c.id === conversationId);
    
    if (!conversation) return;
    conversation.unread = 0;
    updateMessageBadge();
  
    document.querySelector('.no-chat-selected').classList.add('hidden');
    activeChat.classList.remove('hidden');
    document.getElementById('chat-partner-avatar').src = conversation.photographerAvatar;
    document.getElementById('chat-partner-name').textContent = conversation.photographerName;
    renderChatMessages(conversation.messages);
    renderConversationsList();
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function renderChatMessages(messages) {
    chatMessages.innerHTML = '';
    messages.forEach(message => {
        const messageElement = document.createElement('div');
        messageElement.className = `message ${message.sender === 'user' ? 'sent' : 'received'}`;
        messageElement.innerHTML = `
            <div class="message-content">${message.content}</div>
            <div class="message-time">${message.timestamp}</div>
        `;
        
        chatMessages.appendChild(messageElement);
    });
}

function sendMessage(content) {
    if (!currentUser) {
        showNotification('Please login to send messages', 'error');
        switchPage('login');
        return;
    }
    
    if (!activeChatId) return;
    const conversation = conversations.find(c => c.id === activeChatId);
    if (!conversation) return;
    
    const newMessage = {
        id: conversation.messages.length + 1,
        sender: 'user',
        content: content,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
   
    conversation.messages.push(newMessage);
    conversation.lastMessage = content;
    conversation.timestamp = newMessage.timestamp;
    localStorage.setItem('conversations', JSON.stringify(conversations));
    renderChatMessages(conversation.messages);
    renderConversationsList();
    messageInput.value = '';
    chatMessages.scrollTop = chatMessages.scrollHeight;

    setTimeout(() => {
        const replies = [
            "Thanks for your message! I'll get back to you soon.",
            "That's a great question! Let me think about it.",
            "I appreciate your interest in my work!",
            "Would you like to see more of my portfolio?",
            "I'm currently working on a new project. Would you like to collaborate?"
        ];
        
        const randomReply = replies[Math.floor(Math.random() * replies.length)];
        
        const replyMessage = {
            id: conversation.messages.length + 1,
            sender: 'photographer',
            content: randomReply,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        
        conversation.messages.push(replyMessage);
        conversation.lastMessage = randomReply;
        conversation.timestamp = replyMessage.timestamp;
     
        localStorage.setItem('conversations', JSON.stringify(conversations));

        if (activeChatId === conversation.id) {
            renderChatMessages(conversation.messages);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }
    
        renderConversationsList();
     
        updateMessageBadge();
    }, 1000 + Math.random() * 2000);
}

function startNewConversation(photographerId) {
    if (!currentUser) {
        showNotification('Please login to connect with photographers', 'error');
        switchPage('login');
        return;
    }
    
    const photographer = preloadedPhotographers.find(p => p.id === photographerId);
    if (!photographer) return;

    let conversation = conversations.find(c => c.photographerId === photographerId);
    
    if (!conversation) {
        conversation = {
            id: conversations.length + 1,
            photographerId: photographer.id,
            photographerName: photographer.name,
            photographerAvatar: photographer.avatar,
            lastMessage: "Hi! I'd love to connect and chat about photography.",
            timestamp: "Just now",
            unread: 0,
            messages: [
                {
                    id: 1,
                    sender: 'user',
                    content: "Hi! I'd love to connect and chat about photography.",
                    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                }
            ]
        };
        
        conversations.push(conversation);
        localStorage.setItem('conversations', JSON.stringify(conversations));
        
        showNotification(`Started conversation with ${photographer.name}`, 'success');
    }
    
    openChat(conversation.id);
    switchPage('messages');
}

function loginUser(email, password) {
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
        currentUser = user;
        authBtns.classList.add('hidden');
        profileSection.classList.remove('hidden');
        profileBtn.textContent = user.name.split(' ').map(n => n[0]).join('');
        showNotification(`Welcome back, ${user.name}!`, 'success');
        switchPage('home');

        localStorage.setItem('currentUser', JSON.stringify(user));
        
        return true;
    } else {
        showNotification('Invalid email or password', 'error');
        return false;
    }
}

function signupUser(name, email, password, bio) {
    if (users.find(u => u.email === email)) {
        showNotification('User with this email already exists', 'error');
        return false;
    }
    
    const newUser = {
        id: users.length + 1,
        name,
        email,
        password,
        bio,
        avatar: name.split(' ').map(n => n[0]).join('')
    };
    
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    
    currentUser = newUser;
    authBtns.classList.add('hidden');
    profileSection.classList.remove('hidden');
    profileBtn.textContent = newUser.avatar;
    showNotification(`Account created successfully! Welcome, ${name}`, 'success');
    switchPage('home');

    localStorage.setItem('currentUser', JSON.stringify(newUser));
    
    return true;
}

function handleFileSelect(files) {
    previewContainer.innerHTML = '';
    
    Array.from(files).forEach(file => {
        if (!file.type.match('image.*')) {
            showNotification('Please upload only image files', 'error');
            return;
        }
        
        if (file.size > 10 * 1024 * 1024) {
            showNotification('File size should be less than 10MB', 'error');
            return;
        }
        
        const reader = new FileReader();
        
        reader.onload = function(e) {
            const previewItem = document.createElement('div');
            previewItem.className = 'preview-item';
            previewItem.innerHTML = `
                <img src="${e.target.result}" alt="Preview">
                <div class="remove-btn">&times;</div>
            `;
            
            previewItem.querySelector('.remove-btn').addEventListener('click', () => {
                previewItem.remove();
            });
            
            previewContainer.appendChild(previewItem);
        };
        
        reader.readAsDataURL(file);
    });
}

function handleUploadSubmit() {
    if (!currentUser) {
        showNotification('Please login to upload photos', 'error');
        switchPage('login');
        return;
    }
    
    const title = document.getElementById('photo-title').value;
    const description = document.getElementById('photo-description').value;
    const tags = document.getElementById('photo-tags').value;
    const previewItems = previewContainer.querySelectorAll('.preview-item');
    
    if (previewItems.length === 0) {
        showNotification('Please select at least one image to upload', 'error');
        return;
    }
    
    if (!title) {
        showNotification('Please enter a title for your photo', 'error');
        return;
    }
   
    showNotification('Uploading your photos...', 'info');
    
    setTimeout(() => {
        previewItems.forEach((item, index) => {
            const imgSrc = item.querySelector('img').src;
            
            const newImage = {
                id: uploadedImages.length + 1,
                title: index === 0 ? title : `${title} ${index + 1}`,
                description: description,
                url: imgSrc,
                photographer: currentUser.name,
                photographerAvatar: `https://ui-avatars.com/api/?name=${currentUser.name}&background=0f4c75&color=fff`,
                tags: tags.split(',').map(tag => tag.trim()).filter(tag => tag)
            };
            
            uploadedImages.push(newImage);
        });
        
        localStorage.setItem('uploadedImages', JSON.stringify(uploadedImages));
        
        document.getElementById('photo-title').value = '';
        document.getElementById('photo-description').value = '';
        document.getElementById('photo-tags').value = '';
        previewContainer.innerHTML = '';
        
        showNotification('Photos uploaded successfully!', 'success');
      
        renderGallery(mainGallery, [...preloadedImages, ...uploadedImages]);
    }, 1500);
}

function init() {
    initThreeJS();
    renderGallery(featuredGallery, preloadedImages.slice(0, 3));
    renderGallery(mainGallery, [...preloadedImages, ...uploadedImages]);
    renderPhotographers();
    renderConversationsList();
    updateMessageBadge();

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const pageId = link.getAttribute('data-page');
            switchPage(pageId);
        });
    });
    
    loginBtn.addEventListener('click', () => switchPage('login'));
    signupBtn.addEventListener('click', () => switchPage('signup'));
    joinTodayBtn.addEventListener('click', () => switchPage('signup'));
    toSignup.addEventListener('click', (e) => {
        e.preventDefault();
        switchPage('signup');
    });
    toLogin.addEventListener('click', (e) => {
        e.preventDefault();
        switchPage('login');
    });

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;
        loginUser(email, password);
    });

    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('signup-name').value;
        const email = document.getElementById('signup-email').value;
        const password = document.getElementById('signup-password').value;
        const bio = document.getElementById('signup-bio').value;
        signupUser(name, email, password, bio);
    });

    uploadArea.addEventListener('click', () => fileInput.click());
    uploadArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadArea.style.borderColor = '#00b4d8';
    });
    uploadArea.addEventListener('dragleave', () => {
        uploadArea.style.borderColor = 'rgba(0, 180, 216, 0.5)';
    });
    uploadArea.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadArea.style.borderColor = 'rgba(0, 180, 216, 0.5)';
        handleFileSelect(e.dataTransfer.files);
    });
    
    fileInput.addEventListener('change', (e) => {
        handleFileSelect(e.target.files);
    });
    
    uploadSubmit.addEventListener('click', handleUploadSubmit);
  
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('connect-btn')) {
            const photographerId = parseInt(e.target.dataset.photographerId);
            startNewConversation(photographerId);
        }
    });
  
    newChatBtn.addEventListener('click', () => {
        showNotification('Click "Connect" on a photographer profile to start a conversation', 'info');
    });
   
    sendMessageBtn.addEventListener('click', () => {
        const message = messageInput.value.trim();
        if (message) {
            sendMessage(message);
        }
    });
    
    messageInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const message = messageInput.value.trim();
            if (message) {
                sendMessage(message);
            }
        }
    });
   
    quickMessageBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const message = btn.dataset.message;
            sendMessage(message);
        });
    });

    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
        const user = JSON.parse(savedUser);
        loginUser(user.email, user.password);
    }
}
document.addEventListener('DOMContentLoaded', init);
