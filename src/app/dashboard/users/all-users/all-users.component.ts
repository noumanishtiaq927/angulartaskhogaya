import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { NocodeapiCrudService } from '../../services/nocodeapi/nocodeapi-crud.service';

export interface UserData {
  userId: string;
  firstName: string;
  lastName: string;
  Designation: string;
  mobile: number;
  email: string;
  joiningDate: string;
  address: string;
}

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css'],
})
export class AllUsersComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = [
    'select',
    'Image',
    'Name',
    'designation',
    'mobile',
    'email',
    'dateOfJoining',
    'address',
    'Actions',
  ];
  dataSource: MatTableDataSource<any> | any;
  selection = new SelectionModel<any>(true, []);
  profilePic: any;
  dummmy = [
    { id: 1, name: 'any' },
    { id: 2, name: 'ban' },
    { id: 3, name: 'dan' },
  ];
  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection?.selected.length;
    const numRows = this.dataSource?.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${
      row.userId + 1
    }`;
  }

  @ViewChild(MatPaginator) paginator: MatPaginator | any;
  @ViewChild(MatSort) sort: MatSort | any;

  constructor(private noCodeApiCrud: NocodeapiCrudService) {}
  getAirtableData() {
    // this.noCodeApiCrud.getData().subscribe((data: any) => {
    //   this.dataSource = new MatTableDataSource(data);
    //   console.log(this.dataSource);
    //   this.dataSource.paginator = this.paginator;
    //   this.dataSource.sort = this.sort;
    // });
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnInit(): void {
    this.noCodeApiCrud.getData().subscribe((data: any) => {
      console.log(data);
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.profilePic = data.map((x: any) =>
        x.profilePic
          ? x.profilePic.map((x: any) =>
              x.thumbnails ? x.thumbnails.small.url : 'null'
            )
          : 'null'
      );
      this.dataSource.data = this.dataSource.data.map((x: any, index: any) => ({
        ...x,
        pic: this.profilePic[index].toString(),
      }));
      console.log(this.dummmy);
      console.log(this.dataSource);
      console.log(this.profilePic);
    });

    console.log(this.dataSource);
  }
}
