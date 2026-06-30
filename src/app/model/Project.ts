export class Project {
  constructor(
    public id: string = '',
    public title: string = '',
    public description: string = '',
    public coverImage: any = null,
    public projectLogo: any = null,
    public activeProject: boolean = true
  ) {}
}
