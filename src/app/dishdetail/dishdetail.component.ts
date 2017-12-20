import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import { Comment } from '../shared/dish';
const DISHES: Dish[] =
	[
                         {
                           name:'Uthappizza',
                           image: '/assets/images/uthappizza.png',
                           category: 'mains',
                           label:'Hot',
                           price:'4.99',
                           description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.'                        },
                        {
                           name:'Zucchipakoda',
                           image: '/assets/images/zucchipakoda.png',
                           category: 'appetizer',
                           label:'',
                           price:'1.99',
                           description:'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce'                        },
                        {
                           name:'Vadonut',
                           image: '/assets/images/vadonut.png',
                           category: 'appetizer',
                           label:'New',
                           price:'1.99',
                           description:'A quintessential ConFusion experience, is it a vada or is it a donut?'                        },
                        {
                           name:'ElaiCheese Cake',
                           image: '/assets/images/elaicheesecake.png',
                           category: 'dessert',
                           label:'',
                           price:'2.99',
                           description:'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms'                        }
    ];
@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {
	selectedDish: Dish[]=DISHES[0];
	comment =[ {
					value:'Imagine all the eatables living in Confusion!',
					rating:'5 stars',
					author:'--john Lemon oct,17 2012'     },
				{
					value:'Imagine all the eatables living in Confusion!',
					rating:'5 stars',
					author:'--john Lemon oct,17 2012'     },
				{
					value:'sends anyone to heaven,I wish I could get my mother-in-la...',
					rating:'4 stars',
					author:'--paul Mcvites sep,6 2014' },
				{
					value:'Eat it,Just eat it',
					rating:'3 stars',
					author:'Michael jaikishan Feb 14,2015'},
				{
					value:'Ultimate,reaching for the stars',
					rating:'4 stars',
					author:'--Ringo starry Dec 3,2013'},
				{
					value:'it\'s your birthday,we\'re gonna party!',
					rating:'2 stars',
					author:'--25 cent Dec 3,2011'}
		];
					
  constructor() { }

  ngOnInit() {
  }

}
