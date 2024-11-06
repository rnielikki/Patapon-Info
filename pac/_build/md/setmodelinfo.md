# setModelInfo

Sets position and movement information of the given handle.

Before performing this, wait until the model is fully loaded.

## Code Information

- **Name**: `setModelInfo`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 17 0b 00`
- **Assembly Address in Memory** : `0x8911588`

## Parameters

- `(int *)handle_id` *(8 bytes)* : [Handle](./guide/category.md#getting-handle) to set the model info.
- `(float)position_x` *(8 bytes)* : X Position of the model, as *PSP pixels in the world*.
- `(float)position_y` *(8 bytes)* : Y position of the model, as *PSP pixels in the world*. 0 is the center.
- `(float)dest_x` *(8 bytes)* : To where it will move, as X position.
- `(float)dest_y` *(8 bytes)* : To where it will move, as Y position.
- `(float)random_start_offset` *(8 bytes)* : Random offset from the position to be started. **Works only when velocity value exists**.

Note that **PSP screen size is 480 x 272**.

Sets velocity to 0 if the object shouldn't be moved.

## Remarks

The velocity can be set also in `effectparam`.

## Example

Here is one example in hex:

```25 17 0b 00 / 04 00 00 00 / 00 00 00 00 / 20 00 00 00 / 02 00 00 00 / 20 00 00 00 / 03 00 00 00 / 10 00 00 00 / 00 00 00 00 / 10 00 00 00 / 00 00 00 00 / 10 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
setModelInfo((int *)iVar0, (float *)fVar2, (float *)fVar3, (float)0, (float)0, (float)0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08911588(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  undefined4 *puVar3;
  undefined4 *puVar4;
  undefined4 *puVar5;
  float *pfVar6;
  uint uVar7;
  undefined *puVar8;
  int iVar9;
  float fVar10;
  undefined4 uVar11;
  undefined4 uVar12;
  undefined4 uVar13;
  float fVar14;
  undefined4 uVar15;
  undefined4 local_30;
  undefined4 local_2c;
  undefined4 local_28;
  undefined4 local_24;
  undefined4 local_18;
  undefined4 local_14;
  undefined4 local_c;
  undefined4 local_8;
  undefined4 local_4;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,2,1,4);
  puVar4 = (undefined4 *)Pac_Get_Param(param_2,3,1,4);
  puVar5 = (undefined4 *)Pac_Get_Param(param_2,4,1,4);
  pfVar6 = (float *)Pac_Get_Param(param_2,5,1,4);
  if (param_1 == 0) {
    iVar9 = 0;
  }
  else {
    iVar9 = Find_Target_By_HandleID(*(undefined4 *)(param_1 + 0x14),*puVar1,1);
    if (iVar9 == 0) {
      iVar9 = 0;
    }
    if (iVar9 == 0) {
      iVar9 = 0;
    }
    else {
      iVar9 = *(int *)(iVar9 + 200);
      if (iVar9 == 0) {
        iVar9 = 0;
      }
    }
  }
  if (iVar9 != 0) {
    uVar13 = *(undefined4 *)(iVar9 + 200);
    uVar12 = *(undefined4 *)(iVar9 + 0xcc);
    local_30 = *(undefined4 *)(iVar9 + 0xe0);
    local_2c = *(undefined4 *)(iVar9 + 0xe4);
    local_28 = *(undefined4 *)(iVar9 + 0xe8);
    local_24 = *(undefined4 *)(iVar9 + 0xec);
    if (*pfVar6 == 0.0) {
      local_30 = *puVar4;
      local_2c = *puVar5;
    }
    else {
      uVar7 = Util::Random::Timer_Get_Random();
      fVar14 = *pfVar6 * ((float)(uVar7 & 0xffff) * 1.525879e-05 * 2.0 - 1.0);
      if (fVar14 < 0.0) {
        fVar14 = fVar14 + 360.0;
      }
      fVar10 = (float)FUN_0880e604(*puVar4,*puVar5);
      fVar10 = fVar10 + fVar14 * 0.01745329;
      local_30 = syscall::sinf(fVar10);
      local_2c = FUN_0880da1c(fVar10);
      local_14 = *puVar5;
      local_18 = *puVar4;
      uVar11 = FUN_088357b4(&local_18);
      syscall::vscl_q(uVar11,&local_30,&local_30);
    }
    uVar15 = *puVar2;
    uVar11 = *puVar3;
    *(undefined4 *)(iVar9 + 0xc0) = uVar15;
    *(undefined4 *)(iVar9 + 0xc4) = uVar11;
    *(undefined4 *)(iVar9 + 200) = uVar13;
    *(undefined4 *)(iVar9 + 0xcc) = uVar12;
    FUN_0888e270(iVar9,&local_30,0);
    FUN_0887f1e4(*(undefined4 *)(iVar9 + 0x1e0));
    puVar8 = *(undefined **)(iVar9 + 0x1ec);
    if (puVar8 != (undefined *)0x0) {
      local_c = uVar15;
      local_8 = uVar11;
      local_4 = uVar13;
      FUN_08983b94(puVar8,&local_c);
      *puVar8 = 0;
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

