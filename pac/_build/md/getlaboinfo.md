# getLaboInfo

Gets certain types of information. See also: [setLaboInfo](./setlaboinfo.md)

## Code Information

- **Name**: `getLaboInfo`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 0a 05 00`
- **Assembly Address in Memory** : `0x89497ec`

## Parameters

- `(int)labo_type` *(8 bytes)* : The "labo type" to get the value, see below.
- `(int *)destination` *(8 bytes)* : Variable to *store* the value, expected boolean.

|Id|Value 0|Value 1|
|---|---|---|
|0x1|hideout closed|multi|
|0x2|multi guest|multi host/hideout closed|
|0x3|Not Mission Complete|Mission Complete|
|0x4|Mission not Completed and March disabled (in multi)|Mission Completed or March enabled (in multi)|
|0x5|unused|unused|
|0x6|unused|unused|
|0x7|Not connected or connecting|Fully connected in multi|
|0x8|unused|unused|
|0x9|Uberhero|Dark hero|
|0xA|???|???|
|0xB|Unused|Unused|

## Example

Here is one example in hex:

```25 0a 05 00 / 02 00 00 00 / 01 00 00 00 / 04 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
getLaboInfo((int)1, (int *)iVar0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_089497ec(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  uint *puVar2;
  undefined4 uVar3;
  int iVar4;
  uint uVar5;
  undefined4 uVar6;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  uVar6 = *puVar1;
  puVar2 = (uint *)Pac_Get_Param(param_2,1,1,4);
  if (*(int *)(param_1 + 0x10) != 0) {
    Save::Get_Save_BaseAddr(1);
    uVar3 = Save::Get_Save_BaseAddr(1);
    iVar4 = Save::Get_BaseAddr__0x78(uVar3,1);
    iVar4 = *(int *)(iVar4 + 0x44);
    switch(uVar6) {
    case 1:
      *puVar2 = (uint)*(byte *)(iVar4 + 0x24);
      break;
    case 2:
      *puVar2 = (uint)*(byte *)(iVar4 + 0x25);
      break;
    case 3:
      *puVar2 = (uint)*(byte *)(iVar4 + 0x81c);
      break;
    case 4:
      if (*(char *)(iVar4 + 0x81c) == '\0') {
        *puVar2 = 1;
      }
      else if (*(int *)(iVar4 + 0x28) == 0) {
        *puVar2 = 1;
      }
      else {
        *puVar2 = 0;
      }
      break;
    case 5:
      *puVar2 = (uint)*(byte *)(iVar4 + 0x3c);
      break;
    case 6:
      *puVar2 = (uint)*(byte *)(iVar4 + 0x3d);
      break;
    case 7:
      *puVar2 = (uint)*(byte *)(iVar4 + 0x26);
      break;
    case 8:
      *puVar2 = (uint)*(byte *)(iVar4 + 0x3e);
      break;
    case 9:
      iVar4 = Save::Get_Save_BaseAddr(1);
      iVar4 = return__0x285a8(*(undefined4 *)(iVar4 + 0x50));
      *puVar2 = *(uint *)(iVar4 + 0x11b4);
      break;
    case 10:
      uVar6 = Save::Get_Save_BaseAddr(1);
      iVar4 = Save::Get_BaseAddr__0x78(uVar6,1);
      *puVar2 = (uint)(*(int *)(*(int *)(iVar4 + 100) + 0x98) != 0);
      break;
    case 0xb:
      uVar6 = Save::Get_Save_BaseAddr(1);
      iVar4 = Save::Get_BaseAddr__0x78(uVar6,1);
      uVar5 = (uint)(*(char *)(*(int *)(iVar4 + 0x94) + 0x3d8) != '\0');
      if (uVar5 != 0) {
        uVar5 = (uint)(*(int *)(*(int *)(iVar4 + 0x94) + 0x3f0) != 0);
      }
      *puVar2 = uVar5;
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

