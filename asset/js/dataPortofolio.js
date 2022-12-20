window.onload = function(e){

    (function(){

        var tempNavBarAktif;
        var tempSglDataAktif;
        var dataPortoFolio = {
            'porto1' : {
                'type'            : 'website',
                'namaPorto'       : 'Bebasnge.link',
                'deskripsiPorto'  : 'bebasngelink adalah website yang saya buat untuk menyimpan dan memperpendek alamat url serta alamat url dapat di custom sesuai ke inginan.',
                'material'        : {
                    'frontend' : 'Javascript, css, html',
                    'backend'  : 'PHP Native',
                    'database' : 'Mysql',
                    'server'   : '',
                },
                'testAkun'         : {
                    'akun1' : {
                        'namaPengguna' : 'Septian',
                        'peranAkun'    : 'User',
                        'idAkun'       : 'test@test.aja',
                        'sandiAkun'    : 'testAkun'
                    }
                },
                'alamatUrl' : {
                    'url1'  : 'https://bebasngelink.rf.gd/'
                },
                'thumbnail' : 'ssBebasnge.link.png'
            },
            'porto2' : {
                'type'            : 'website',
                'namaPorto'       : 'Al-Fattah Online System',
                'deskripsiPorto'  : 'Al-fattah online system adalah website untuk penilain siswa dan digital raport, saya buat untuk membatu tugas kuliah teman',
                'material'        : {
                    'frontend' : 'Javascript, css, html.',
                    'backend'  : 'PHP Native',
                    'database' : 'Mysql',
                    'server'   : '',
                },
                'testAkun'         : {
                    'akun1' : {
                        'namaPengguna' : 'Septian',
                        'peranAkun'    : 'User',
                        'idAkun'    : 'test@test.aja',
                        'sandiAkun'    : 'testAkun'
                    }
                },
                'alamatUrl' : {
                    'url1' : 'https://lelah.rf.gd/prtf/paud/logIn'
                },
                'thumbnail' : 'ssAlFattah.png'
            },
            'porto3' : {
                'type'            : 'website',
                'namaPorto'       : 'Online Absensi',
                'deskripsiPorto'  : 'System absensi online menggunakan QrCode, dapat pantau secara realtime data absen yang masuk, di buat untuk Pt samudra kreatif studio',
                'material'        : {
                    'frontend' : 'Jquery, Javascript, Boostrap, css, html.',
                    'backend'  : 'PHP Native.',
                    'database' : 'Mysql.',
                    'server'   : '',
                },
                'testAkun'         : {
                    'akun1' : {
                        'namaPengguna' : 'Septian',
                        'peranAkun'    : 'User',
                        'idAkun'    : 'test@test.aja',
                        'sandiAkun'    : 'testAkun'
                    }
                },
                'alamatUrl' : {
                    'url1' : 'https://lelah.rf.gd/prtf/absensiSks/'
                },
                'thumbnail' : 'ssSamudraKreatif.png'
            },
            'porto4' : {
                'type'            : 'website',
                'namaPorto'       : 'Simple Resto Laravel',
                'deskripsiPorto'  : 'Web App Ini saya buat untuk memenuhi syarat lamaran pekerjaan, yang mana hanya di berikan tengang waktu pembuatan selama dua hari.',
                'material'        : {
                    'frontend' : 'Javascript, Boostrap, html, jquery, toastr.',
                    'backend'  : 'PHP, Laravel 8.',
                    'database' : 'Mysql.',
                    'server'   : '',
                },
                'testAkun'         : {
                    'akun1' : {
                        'namaPengguna' : 'Septian',
                        'peranAkun'    : 'Kasir',
                        'idAkun'    : 'harry.potter@gmail.com',
                        'sandiAkun'    : 'Haryy_2709*..*'
                    },
                    'akun2' : {
                        'namaPengguna' : 'Septian',
                        'peranAkun'    : 'Pelayan',
                        'idAkun'    : 'rudi@gmail.com',
                        'sandiAkun'    : 'Rudy_2709*..*'
                    }
                },
                'alamatUrl' : {
                    'url1' : 'https://lelah.rf.gd/prtf/simpleAppResto/'
                },
                'thumbnail' : 'ssSimpleResto.png'
            },
            'porto5' : {
                'type'            : 'website',
                'namaPorto'       : 'System Perpus Online',
                'deskripsiPorto'  : 'System Perpus Online memliki feature cetak kartu angota.System perpus online yang saya buat adalah tugas akhir dari pelatihan VSGA Digital Talent KOMINFO',
                'material'        : {
                    'frontend' : 'Javascript, css, html.',
                    'backend'  : 'PHP Native.',
                    'database' : 'Mysql.',
                    'server'   : '',
                },
                'testAkun'         : {
                    'akun1' : {
                        'namaPengguna' : 'Septian',
                        'peranAkun'    : 'User',
                        'idAkun'    : 'test@test.aja',
                        'sandiAkun'    : 'testAkun'
                    }
                },
                'alamatUrl' : {
                    'url1' : 'https://lelah.rf.gd/prtf/perpus/'
                },
                'thumbnail' : 'vsga.png'
            },
            'porto6' : {
                'type'            : 'website',
                'namaPorto'       : 'Submission Dicoding',
                'deskripsiPorto'  : 'Project ini saya buat untuk memenuhi tugas submission dari dicoding indonesia yang mana biayaan nya berasal dari kartu prakerja',
                'material'        : {
                    'frontend' : 'Javascript, css, html.',
                    'backend'  : '',
                    'database' : '',
                    'server'   : '',
                },
                'testAkun'         : {
                    'akun1' : {
                    }
                },
                'alamatUrl' : {
                    'url1' : 'https://lelah.rf.gd/prtf/dicodingCourse/'
                },
                'thumbnail' : 'dicoding.png'
            },
            'porto7' : {
                'type'            : 'website',
                'namaPorto'       : 'E-Library SMK PKP',
                'deskripsiPorto'  : 'System Perpustaka online yang memiliki feature favorite, peminjaman buku, cetak report pdf dll, website ini saya buat berdsarkan request client',
                'material'        : {
                    'frontend' : 'Javascript, css, html, ChartJs',
                    'backend'  : 'PHP Native',
                    'database' : 'Mysql',
                    'server'   : 'Apache',
                },
                'testAkun'         : {
                    'akun1' : {
                        'namaPengguna' : 'Septian',
                        'peranAkun'    : 'Super Admin',
                        'idAkun'       : 'xiangxore@proton.me, idAdmin : 01, idPerpus : 00000001',
                        'sandiAkun'    : 'Septian_2709*..*'
                    },
                    'akun2' : {
                        'namaPengguna' : 'Septian',
                        'peranAkun'    : 'Pengguna',
                        'idAkun'       : 'septian.triwidian@gmail.com, idPerpus : 00000002',
                        'sandiAkun'    : '1Ra2L8zq'
                    }
                },
                'alamatUrl' : {
                    'url1' : 'https://smkpkp.lelah.rf.gd/'
                },
                'thumbnail' : 'ssE-LibrarySmk.png'
            },
            'porto8' : {
                'type'            : 'excel',
                'namaPorto'       : 'Schedule System Compare',
                'deskripsiPorto'  : 'Project ini saya buat atas permintaan hrd saya waktu bekerja di transmart, project ini digunakan untuk compare jam masuk, libur. berdasarkan finger print dan schedule per divisi. menggunakan sript VBA',
                'material'        : {
                    'frontend' : 'Spreadsheet Excel',
                    'backend'  : 'VBA Excel',
                },
                'alamatUrl' : {
                    'url1' : 'https://smkpkp.lelah.rf.gd/'
                },
                'thumbnail' : 'ssExcel.app.PNG'
            },
            'porto9' : {
                'type'            : 'dg',
                'namaPorto'       : 'Flayer Penjualan Rumah',
                'deskripsiPorto'  : 'Flayer ini saya buat untuk memenuhi persayaratan test melamar digital marketing',
                'software'        : {
                    'visualEditing' : 'Photoshop',
                },
                'alamatUrl' : {
                    'url1' : 'ATC.jpg'
                },
                'thumbnail' : 'thumbATC.PNG'
            },
            'porto10' : {
                'type'            : 'dg',
                'namaPorto'       : 'Desain Iklan Instagram',
                'deskripsiPorto'  : 'Desain Iklan untuk istagram, edisi bantu kerabat',
                'software'        : {
                    'visualEditing' : 'Photoshop',
                },
                'alamatUrl' : {
                    'url1' : 'hasil_akhir.png'
                },
                'thumbnail' : 'thumbhasil_akhir.png'
            },
            'porto11' : {
                'type'            : 'dg',
                'namaPorto'       : 'Desain Tiket Natura Pesanan Bu Eti',
                'deskripsiPorto'  : 'Desain Tiket Natura Pesanan Bu Eti',
                'software'        : {
                    'visualEditing' : 'Photoshop',
                },
                'alamatUrl' : {
                    'url1' : 'ds.png'
                },
                'thumbnail' : 'thumbds.png'
            },
            'porto12' : {
                'type'            : 'dg',
                'namaPorto'       : 'Desain Iseng2',
                'deskripsiPorto'  : 'Ini lagi Iseng aja terus lagi mood juga buat ngedesain',
                'software'        : {
                    'visualEditing' : 'Photoshop',
                },
                'alamatUrl' : {
                    'url1' : 'llk.png'
                },
                'thumbnail' : 'thumbllk.png'
            },
            'porto13' : {
                'type'            : 'dg',
                'namaPorto'       : 'Spanduk Pesenan',
                'deskripsiPorto'  : 'Desain Spanduk Pesanan Kak Hesti',
                'software'        : {
                    'visualEditing' : 'Photoshop',
                },
                'alamatUrl' : {
                    'url1' : 'a.png'
                },
                'thumbnail' : 'thumba.png'
            }
        }
        var objKeyPorto    = Object.keys(dataPortoFolio);
        var objFilterMenu  = document.getElementsByClassName('filters_menu');
        var jumlahPorto    = objKeyPorto.length;
        var jmlObjFmenu    = objFilterMenu.length;

        if(jumlahPorto > 0){

            var mainBoxPorto  = document.getElementById('portoMain');
            
            for(var i = 0; i < jumlahPorto; i++){
        
                var indexPorto        = dataPortoFolio[objKeyPorto[i]];
                var thumbnail         = indexPorto['thumbnail'];
                var namaPorto         = indexPorto['namaPorto'];
                var deskripsiPorto    = indexPorto['deskripsiPorto'];
                var material          = (indexPorto['material'] !== null && indexPorto['material'] !== undefined) ? indexPorto['material'] : {};
                var testAkun          = (indexPorto['testAkun'] !== null && indexPorto['testAkun'] !== undefined) ? indexPorto['testAkun'] : {};
                var alamatUrl         = (indexPorto['alamatUrl'] !== null && indexPorto['alamatUrl'] !== undefined) ? indexPorto['alamatUrl'] : null;
                var typePorto         = indexPorto['type'];
                var objKeyMaterial    = Object.keys(material);
                var objKeyTestAkun    = Object.keys(testAkun);
                var objCntPorto       = document.createElement('div');
                
                if(typePorto === 'dg'){
                        objCntPorto.className = "col-sm-6 col-lg-4 mt-3 mb-3 dg";
                        objCntPorto.innerHTML = 
                        '<figure class="m-auto shadow rounded pt-2 pb-2 fg zoom">'+
                          '<a class="zoom" href="asset/images/'+ alamatUrl['url1'] +'">'+
                            '<img src="asset/images/'+ thumbnail +'" class="gambarDesainGrafis rounded" alt="Gambar gagal di muat">'+
                            '<figcaption class="figure-caption">'+
                                deskripsiPorto
                            '</figcaption>'+
                            '</a>'+
                            '</figure>';
                            
                }else{  

                    var objBtnColl   = document.createElement('button');
                    var tempMaterial = "";
                    var tempTestAkun = "";

                    objCntPorto.className     = 'col-sm-6 col-lg-4 mt-3 mb-3 wrapperPorto '+ typePorto +' containerCol' + i;
                    objBtnColl.className      = "btn btn-block p-1";
                    objBtnColl.type           = "button";
                    objBtnColl.setAttribute('data-col', 'collapse' + i);
                    objBtnColl.setAttribute('data-parent', 'containerCol' + i);
                    objBtnColl.innerHTML      = 'Detail Portofolio';

                    objKeyMaterial.forEach(function(a, b, c){
                        
                        if(material[a].match(/^\s*$/) === null){

                            tempMaterial += 
                            '<tr>'+
                                '<td>'+ a +'</td>'+
                                '<td>'+ material[a] +'</td>'+
                            '</tr>';

                        }

                    });

                    objKeyTestAkun.forEach(function(a, b, c){
                        
                        tempTestAkun +=
                        '<tr>'+
                            '<td>' + testAkun[a]['peranAkun'] + '</td>'+
                            '<td>' + testAkun[a]['idAkun'] + '</td>'+
                            '<td>' + testAkun[a]['sandiAkun'] + '</td>'+
                        '</tr>';

                    });

                    objCntPorto.innerHTML =
                    '<div class="box small shadow">'+
                        '<div class="gambarList" style="background-image:url(\'asset/images/'+ thumbnail +'\');"></div>'+
                        '<div class="p-2">'+
                            '<h5>'+ namaPorto +'</h5>'+
                            '<p class="m-1">' + deskripsiPorto + '</p>'+
                        '</div>'+
                        '<div class="accordion m-1" id="infAkun'+i+'">'+
                            '<div class="card rounded">'+
                                '<div class="card-header p-1 head'+ i +'" id="head'+i+'"></div>'+
                                '<div id="collapse'+i+'" class="accordion-collapse collapse collapse'+i+'" aria-labelledby="head'+i+'" data-parent="#infAkun'+i+'">'+
                                    '<div class="card-body p-1 text-muted overflow-auto">'+
                                        'Material Portofolio'+
                                        '<table class="m-2 table-sm table-bordered">'+
                                            '<tbody>'+
                                                tempMaterial+
                                            '</tbody>'+
                                        '</table>'+
                                        'Akun Untuk Test'+
                                        '<table class="m-2 table-sm table-bordered">'+
                                            '<tbody>'+
                                                '<tr>'+
                                                    '<td>Peran Akun</td>'+
                                                    '<td>ID / EMAIL</td>'+
                                                    '<td>Sandi</td>'+
                                                '</tr>'+
                                                tempTestAkun+
                                            '</tbody>'+
                                        '</table>'+
                                    '</div>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                        '<div class="row m-2 d-flex justify-content-center">'+
                            '<a href="'+ alamatUrl['url1'] +'" target="_blank" class="col btn btn-warning text-white m-1">'+
                                'Kunjungi <i class="fa fa-external-link" aria-hidden="true"></i>'+
                            '</a>'+
                        '</div>'+
                    '</div>';

                    objCntPorto.getElementsByClassName('head'+i)[0].appendChild(objBtnColl);
                    
                    objBtnColl.onclick = function(e){
                        e.stopImmediatePropagation();
                        e.stopPropagation();

                        var attrib      = this.attributes;
                        var objParent   = objCntPorto.parentNode.getElementsByClassName(attrib['data-parent'].value)[0];
                        var objCol      = objParent.getElementsByClassName(attrib['data-col'].value)[0];
                        
                        return new bootstrap.Collapse(objCol);
                    }
                }
                    
                mainBoxPorto.appendChild(objCntPorto);
            }
        
        }

        if(jmlObjFmenu === 1){
            
            var objChild = objFilterMenu[0].children;
            var jmlChild = objChild.length;

            for(j = 0; j < jmlChild; j++){

                var objSglNav = objChild[j];

                if(objSglNav.attributes['cnt-bind'] !== undefined){

                    var objCntBind    = document.getElementsByClassName(objSglNav.attributes['cnt-bind'].value);
                    var jmlObjCntBind = objCntBind.length;

                    var clkObjChi = (function clkObjChiF(obj){
    
                        obj.onclick = function(e){
                            e.stopImmediatePropagation()
                            e.stopPropagation();
    
                            if(tempNavBarAktif !== null){
                                tempNavBarAktif.className = 'normal';
                            }
    
                            this.className  = 'active';
                            tempNavBarAktif = this; 
    
                            var bindData  = this.attributes['cnt-bind'].value;
                            var objSgl    = document.getElementsByClassName(bindData);
                            var jmlObjSgl = objSgl.length;

                            //rubah menjadi display none jika di temporary objsgl tersedia data
                            if(tempSglDataAktif !== null){

                                var jmlTempSgl = tempSglDataAktif.length;

                                for(k = 0; k < jmlTempSgl; k++){

                                    tempSglDataAktif[k].style.display = 'none';

                                }

                            }

                            //rubha menjadi display block jika di temukan class dengan binding data
                            if(jmlObjSgl > 0){

                                tempSglDataAktif = objSgl;

                                for(var l = 0; l < jmlObjSgl; l++){

                                    objSgl[l].style.display = 'block';

                                }

                            }
    
                        }
    
                        return clkObjChiF;
                    }(objSglNav));

                    if(objSglNav.className === 'active'){
    
                        tempNavBarAktif  = objSglNav;
                        tempSglDataAktif = objCntBind;
    
                    }else{

                        if(jmlObjCntBind > 0){

                            for(var m = 0; m < jmlObjCntBind; m++){

                                objCntBind[m].style.display = 'none';

                            }

                        }

                    }
    

                }


            }

        }

    }());

}