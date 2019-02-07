import React from 'react';

//******** UI COMPONENT ********\\

const List = ({kontakProps, deleteKontakProps, editKontakProps}) => {
	const kontak = kontakProps.length ?
		kontakProps.map((obj,key) => {
		
		if(obj.status === 'Kepala Keluarga' || obj.status === 'Istri'){
			return (
				<div className="col s12 m4 l6" key={key}>
					
					<div className="col l12">
						<span><p className="center">Nama : {obj.name} </p></span>
						<span><p className="center">Umur : {obj.age}</p></span>
						<span><p className="center">Statu : {obj.status}</p></span>
						<span>
							<p className="center">
								<button className="btn-floating btn-small waves-effect waves-light red pulse center" onClick={() => {
									editKontakProps(obj.id)
								}}><i className="material-icons">border_color</i></button>
								<button className="btn-floating btn-small waves-effect waves-light red pulse center" onClick={() => {
									deleteKontakProps(obj.id)
								}}><i className="material-icons">delete</i></button>
							</p>
						</span>
					</div>
					<hr/>
				</div>
			)
		}else if(obj.status === 'Anak'){
			return(
				<div className="col s12 m4 l4" key={key}>
					
					<div className="col l12">
						<span><p className="center">Nama : {obj.name} </p></span>
						<span><p className="center">Umur : {obj.age}</p></span>
						<span><p className="center">Statu : {obj.status}</p></span>
						<span>
							<p className="center">
								<button className="btn-floating btn-small waves-effect waves-light red pulse center" onClick={() => {
									editKontakProps(obj.id)
								}}><i className="material-icons">border_color</i></button>
								<button className="btn-floating btn-small waves-effect waves-light red pulse center" onClick={() => {
									deleteKontakProps(obj.id)
								}}><i className="material-icons">delete</i></button>
							</p>
						</span>
					</div>
					<hr/>
				
				</div>
			)
		}else{
			return(
				<div className="col s12 m4 l3" key={key}>
					
					<div className="col l12">
						<span><p>Nama : {obj.name} </p></span>
						<span><p>Umur : {obj.age}</p></span>
						<span><p>Statu : {obj.status}</p></span>
					</div>
					<div className="col l2">
					<span>
						<button className="btn-floating btn-small waves-effect waves-light red pulse" onClick={() => {
							editKontakProps(obj.id)
						}}><i className="material-icons">border_color</i></button>
					</span>
					</div>
					<div className="col l2">
					<span>
						<button className="btn-floating btn-small waves-effect waves-light red pulse" onClick={() => {
							deleteKontakProps(obj.id)
						}}><i className="material-icons">delete</i></button>
					</span>
					</div>
					<hr/>
				
				</div>
			)
		}
		
		}
	) : (
		<h3 className="center blue-text">Tidak Ada Data</h3>
	);
	
	
	return(
		<div className="collection-item">
			<div className="collection">
				<div className="row">
					<div className="col s12 m12 l12">
						<div className="row">
						{kontak}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
};
export default List;