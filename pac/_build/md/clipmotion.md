# clipMotion

Plays certain motion of a given player or object. This auto resumes from the paused status. If the character wasn't paused, it takes T-Pose.

## Code Information

- **Name**: `clipMotion`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 17 39 00`
- **Assembly Address in Memory** : `0x8914ac8`

## Parameters

- `(int *)handle_id` *(8 bytes)* : The target [handle](./guide/how-to-get-a-handle.md).
- `(int)action_id` *(8 bytes)* : The [Action ID](./guide/reference-table.md#action-ids) to perform.
- `(float)offset` *(8 bytes)* : Start offset of the animation. (*Maybe* 1.0 represents around 0.2sec)
   - Usual hero animation offset length seems like around 6~10. Please tell more about this parameter.
- `(float)delay` *(8 bytes)* : Delay before starting the animation. This can be -1.

## Example

Here is one example in hex:

```25 17 39 00 / 04 00 00 00 / 0a 00 00 00 / 02 00 00 00 / 02 00 00 00 / 10 00 00 00 / 00 00 00 00 / 10 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
clipMotion((int *)iVar10, (int)2, (float)0, (float)0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08914ac8(int param_1,undefined4 param_2)

{
  int *piVar1;
  undefined2 *puVar2;
  undefined4 *puVar3;
  float *pfVar4;
  int iVar5;
  int iVar6;
  float fVar7;
  float fVar8;
  undefined local_c;
  undefined local_b;
  undefined local_a;
  undefined local_9;
  undefined4 local_8;
  uint local_4;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined2 *)Pac_Get_Param(param_2,1,1,4);
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,2,1,4);
  pfVar4 = (float *)Pac_Get_Param(param_2,3,1,4);
  if (*piVar1 != -1) {
    iVar5 = Find_Target_By_HandleID(*(undefined4 *)(param_1 + 0x14),*piVar1,1);
    if (iVar5 == 0) {
      iVar5 = 0;
    }
    if (((iVar5 != 0) && (iVar5 = *(int *)(iVar5 + 200), iVar5 != 0)) &&
       (iVar6 = *(int *)(iVar5 + 0x1e8), iVar6 != 0)) {
      *(undefined *)(iVar5 + 0xb9) = 0;
      *(undefined *)(iVar6 + 0xb9) = 1;
      fVar8 = *pfVar4;
      local_8 = *puVar3;
      fVar7 = fVar8 * 4800.0;
      local_c = (undefined)*puVar2;
      local_b = 0;
      if (fVar7 < 2.147484e+09) {
        local_4 = (uint)fVar7;
      }
      else {
        local_4 = (int)(fVar7 - 2.147484e+09) | 0xffff8000;
      }
      local_a = fVar8 < 0.0;
      local_9 = 1;
      if (fVar8 < 0.0) {
        local_4 = 0;
      }
      FUN_08981164(iVar6,&local_c);
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

