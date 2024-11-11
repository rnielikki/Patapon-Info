# isFrontLineEnterView

Check if the front of the squad got the sight.

## Code Information

- **Name**: `isFrontLineEnterView`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 f2 00`
- **Assembly Address in Memory** : `0x8926d60`

## Parameters

- `(int *)squad_handle` *(8 bytes)* : The target squad handle.
- `(int)squadactivityparam_id` *(8 bytes)* : [`squadActivityParam` id](./guide/reference-table.md#squadactivityparam-ids) that contains the sight, -1 for default sight.
- `(int *)result` *(8 bytes)* : 1 if there is something on their sight, otherwise 0.

## Example

Here is one example in hex:

```25 16 f2 00 / 04 00 00 00 / 2c 00 00 00 / 02 00 00 00 / ff ff ff ff / 08 00 00 00 / 5b 00 00 00```

Which is interpreted as:

```c
isFrontLineEnterView((int *)iVar44, (int)-1, ((global)int *)giVar91)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08926d60(int param_1,undefined4 param_2)

{
  char cVar1;
  undefined4 *puVar2;
  undefined4 *puVar3;
  undefined4 *puVar4;
  int iVar5;
  int iVar6;
  float *pfVar7;
  int iVar8;
  float fVar9;
  float fVar10;
  
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  puVar4 = (undefined4 *)Pac_Get_Param(param_2,2,1,4);
  *puVar4 = 0;
  iVar5 = Find_Target_By_HandleID(*(undefined4 *)(*(int *)(param_1 + 0x10) + 0xe8),*puVar2,1);
  if ((iVar5 != 0) && (iVar6 = (**(code **)(*(int *)(iVar5 + 4) + 0x34))(iVar5), iVar6 == 3)) {
    iVar6 = *(int *)(iVar5 + 0x704);
    iVar8 = iVar6 + 0x170;
    fVar9 = (float)Action::Get_Unit_Attk_Distance(iVar5 + 0x1f0,*puVar3);
    cVar1 = pointer_offset18(iVar5 + 0x474);
    if (cVar1 == '\0') {
      fVar10 = *(float *)(iVar8 + *(int *)(iVar5 + 0x184) * 0x10 + 0x20);
    }
    else {
      pfVar7 = (float *)offset__10(iVar5 + 0x260);
      fVar10 = *pfVar7;
    }
    if (*(int *)(iVar6 + 0x288) == 1) {
      fVar10 = fVar10 + fVar9;
    }
    else {
      fVar10 = fVar10 - fVar9;
    }
    iVar5 = FUN_088f9bb8(fVar10,iVar8);
    if (iVar5 == 0) {
      *puVar4 = 1;
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

