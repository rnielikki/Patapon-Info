# getCollisionSize

Gets size of the collision hitbox.

## Code Information

- **Name**: `getCollisionSize`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 17 43 00`
- **Assembly Address in Memory** : `0x8915928`

## Parameters

- `(int *)handle_id` *(8 bytes)* : The target [handle](./guide/how-to-get-a-handle.md).
- `(float *)width` *(8 bytes)* : Variable to *store* the width of the collision box.
- `(float *)height` *(8 bytes)* : Variable to *store* the height of the collision box.

## Example

Here is one example in hex:

```25 17 43 00 / 04 00 00 00 / 00 00 00 00 / 20 00 00 00 / 01 00 00 00 / 40 00 00 00 / ff 01 00 00```

Which is interpreted as:

```c
getCollisionSize((int *)iVar0, (float *)fVar1, ((global)float *)gfVar511)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08915928(int param_1,undefined4 param_2)

{
  int *piVar1;
  undefined4 *puVar2;
  undefined4 *puVar3;
  int iVar4;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,2,1,4);
  *puVar2 = 0;
  *puVar3 = 0;
  if (*piVar1 != -1) {
    iVar4 = Find_Target_By_HandleID(*(undefined4 *)(param_1 + 0x14),*piVar1,1);
    if (iVar4 == 0) {
      iVar4 = 0;
    }
    if (((iVar4 != 0) && (*(int *)(iVar4 + 0xd0) != 0)) && (iVar4 = FUN_088dcfcc(), iVar4 != 0)) {
      *puVar2 = *(undefined4 *)(iVar4 + 0x88);
      *puVar3 = *(undefined4 *)(iVar4 + 0x8c);
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

