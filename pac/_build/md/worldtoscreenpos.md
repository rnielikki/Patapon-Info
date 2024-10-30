# worldToScreenPos

Gets from world position (e.g. position in Mission field) to screen position (position in UI).

## Code Information

- **Name**: `worldToScreenPos`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 24 01`
- **Assembly Address in Memory** : `0x892a620`

## Parameters

- `(float)world_x` *(8 bytes)* : X posiiton in the field/world, as psp pixel unit.
- `(float)world_y` *(8 bytes)* : Y position in the field/world, as psp pixel unit.
- `(float *)screen_x` *(8 bytes)* : Variable to *store* the converted X screen position, as psp pixel unit.
- `(float *)screen_y` *(8 bytes)* : Variable to *store* the converted Y screen position, as psp pixel unit.

## Example

Here is one example in hex:

```25 16 24 01 / 10 00 00 00 / 00 80 8e 44 / 10 00 00 00 / 00 00 00 00 / 20 00 00 00 / 00 00 00 00 / 20 00 00 00 / 01 00 00 00```

Which is interpreted as:

```c
worldToScreenPos((float)1140, (float)0, (float *)fVar0, (float *)fVar1)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0892a620(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  undefined4 *puVar3;
  undefined4 *puVar4;
  int iVar5;
  undefined4 local_20;
  undefined4 local_1c;
  undefined4 local_18;
  undefined4 local_14;
  undefined4 local_10;
  undefined4 local_c;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,2,1,4);
  puVar4 = (undefined4 *)Pac_Get_Param(param_2,3,1,4);
  local_1c = *puVar2;
  local_20 = *puVar1;
  local_14 = 0x3f800000;
  local_18 = 0;
  local_10 = 0;
  local_c = 0;
  if ((*(int *)(param_1 + 0x10) != 0) && (iVar5 = FUN_0889e54c(), iVar5 != 0)) {
    iVar5 = FUN_0889e54c(*(undefined4 *)(param_1 + 0x10));
    FUN_08910268(iVar5 + 0x450,&local_10,&local_20);
  }
  *puVar3 = local_10;
  *puVar4 = local_c;
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

